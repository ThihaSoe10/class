import { Button, Box, Typography, Modal, Snackbar } from "@mui/material";
import UpgradeState from "../classes/upgradeState";
import React, { useEffect, useRef } from "react";
import UpgradeEnergy from "../classes/upgradeEnergy";
import { saveUserDataToFirebase } from "../firebaseFunctions"; // Import your Firebase function

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "rgb(14, 16, 17)",
  border: "2px solid rgb(141, 130, 114)",
  boxShadow: 24,
  p: 3,
};

export function SaveGame(props: {
  balanceRef: React.MutableRefObject<{ value: number }>;
  upgradeMap: React.MutableRefObject<Map<string, UpgradeState>>;
  upgradeEnergyMap: React.MutableRefObject<Map<string, UpgradeEnergy>>;
  userId: string | null; // Assuming you're passing userId as a prop
}) {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  function handleSave() {
    localStorage.setItem(
      "balanceRef",
      JSON.stringify(props.balanceRef.current.value)
    );
    localStorage.setItem(
      "Upgradeclick",
      JSON.stringify(props.upgradeMap.current.get("clickUpgrade")!.level)
    );
    localStorage.setItem(
      "AC1Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker01")!.level)
    );
    localStorage.setItem(
      "AC2Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker02")!.level)
    );
    localStorage.setItem(
      "AC3Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker03")!.level)
    );
    localStorage.setItem(
      "AC4Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker04")!.level)
    );
    localStorage.setItem(
      "AC5Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker05")!.level)
    );
    localStorage.setItem(
      "AC6Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker06")!.level)
    );
    localStorage.setItem(
      "AC7Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker07")!.level)
    );
    localStorage.setItem(
      "AC8Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker08")!.level)
    );
    localStorage.setItem(
      "AC9Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker09")!.level)
    );
    localStorage.setItem(
      "AC10Level",
      JSON.stringify(props.upgradeMap.current.get("autoClicker10")!.level)
    );
    //for Ref Card
    localStorage.setItem(
      "RC1Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker01")!.level)
    );
    localStorage.setItem(
      "RC2Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker02")!.level)
    );
    localStorage.setItem(
      "RC3Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker03")!.level)
    );
    localStorage.setItem(
      "RC4Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker04")!.level)
    );
    localStorage.setItem(
      "RC5Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker05")!.level)
    );
    localStorage.setItem(
      "RC6Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker06")!.level)
    );
    localStorage.setItem(
      "RC7Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker07")!.level)
    );
    localStorage.setItem(
      "RC8Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker08")!.level)
    );
    localStorage.setItem(
      "RC9Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker09")!.level)
    );
    localStorage.setItem(
      "RC10Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker10")!.level)
    );
    localStorage.setItem(
      "RC11Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker11")!.level)
    );
    localStorage.setItem(
      "RC12Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker12")!.level)
    );
    localStorage.setItem(
      "RC13Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker13")!.level)
    );
    localStorage.setItem(
      "RC14Level",
      JSON.stringify(props.upgradeMap.current.get("refClicker14")!.level)
    );
    //ADS
    localStorage.setItem(
      "AD1Level",
      JSON.stringify(props.upgradeMap.current.get("adsClicker01")!.level)
    );
    localStorage.setItem(
      "AD2Level",
      JSON.stringify(props.upgradeMap.current.get("adsClicker02")!.level)
    );
    localStorage.setItem(
      "AD3Level",
      JSON.stringify(props.upgradeMap.current.get("adsClicker03")!.level)
    );
    localStorage.setItem(
      "AD4Level",
      JSON.stringify(props.upgradeMap.current.get("adsClicker04")!.level)
    );
    localStorage.setItem(
      "AD5Level",
      JSON.stringify(props.upgradeMap.current.get("adsClicker05")!.level)
    );
    localStorage.setItem(
      "AD6Level",
      JSON.stringify(props.upgradeMap.current.get("adsClicker06")!.level)
    );
    localStorage.setItem(
      "AD7Level",
      JSON.stringify(props.upgradeMap.current.get("adsClicker07")!.level)
    );
    localStorage.setItem(
      "AD8Level",
      JSON.stringify(props.upgradeMap.current.get("adsClicker08")!.level)
    );

    // console.log("Game saved");
    // localStorage.setItem(
    //   "pool",
    //   JSON.stringify(props.upgradeEnergyMap.current.get("energyPool")!.level)
    // );
    // localStorage.setItem(
    //   "refill",
    //   JSON.stringify(props.upgradeEnergyMap.current.get("energyfill")!.level)
    // );
    //console.log("Game setitem");
    // original// setOpenSnackbar(true);
    // setOpenSnackbar(false);
    const firebaseData = {
      balance: props.balanceRef.current.value,
      upgrades: {
        clickUpgrade: props.upgradeMap.current.get("clickUpgrade")!.level,
        autoClicker01: props.upgradeMap.current.get("autoClicker01")!.level,
        autoClicker02: props.upgradeMap.current.get("autoClicker02")!.level,
        autoClicker03: props.upgradeMap.current.get("autoClicker03")!.level,
        autoClicker04: props.upgradeMap.current.get("autoClicker04")!.level,
        autoClicker05: props.upgradeMap.current.get("autoClicker05")!.level,
        autoClicker06: props.upgradeMap.current.get("autoClicker06")!.level,
        autoClicker07: props.upgradeMap.current.get("autoClicker07")!.level,
        autoClicker08: props.upgradeMap.current.get("autoClicker08")!.level,
        autoClicker09: props.upgradeMap.current.get("autoClicker09")!.level,
        autoClicker10: props.upgradeMap.current.get("autoClicker10")!.level,
        refClicker01: props.upgradeMap.current.get("refClicker01")!.level,
        refClicker02: props.upgradeMap.current.get("refClicker02")!.level,
        refClicker03: props.upgradeMap.current.get("refClicker03")!.level,
        refClicker04: props.upgradeMap.current.get("refClicker04")!.level,
        refClicker05: props.upgradeMap.current.get("refClicker05")!.level,
        refClicker06: props.upgradeMap.current.get("refClicker06")!.level,
        refClicker07: props.upgradeMap.current.get("refClicker07")!.level,
        refClicker08: props.upgradeMap.current.get("refClicker08")!.level,
        refClicker09: props.upgradeMap.current.get("refClicker09")!.level,
        refClicker10: props.upgradeMap.current.get("refClicker10")!.level,
        refClicker11: props.upgradeMap.current.get("refClicker11")!.level,
        refClicker12: props.upgradeMap.current.get("refClicker12")!.level,
        refClicker13: props.upgradeMap.current.get("refClicker13")!.level,
        refClicker14: props.upgradeMap.current.get("refClicker14")!.level,
        //ads
        adsClicker01: props.upgradeMap.current.get("adsClicker01")!.level,
        adsClicker02: props.upgradeMap.current.get("adsClicker02")!.level,
        adsClicker03: props.upgradeMap.current.get("adsClicker03")!.level,
        adsClicker04: props.upgradeMap.current.get("adsClicker04")!.level,
        adsClicker05: props.upgradeMap.current.get("adsClicker05")!.level,
        adsClicker06: props.upgradeMap.current.get("adsClicker06")!.level,
        adsClicker07: props.upgradeMap.current.get("adsClicker07")!.level,
        adsClicker08: props.upgradeMap.current.get("adsClicker08")!.level,
      },
      //upgradeEnergy: {
      //energyPool: props.upgradeEnergyMap.current.get('energyPool')!.level,
      //energyFill: props.upgradeEnergyMap.current.get('energyfill')!.level,
      //},
      lastUpdated: new Date().getTime(),
    };

    // Save data to Firebase if userId is not null
    if (props.userId) {
      saveUserDataToFirebase(props.userId, firebaseData);
      setOpenSnackbar(false);
    } else {
      console.error("Cannot save data: userId is null.");
    }
  }
  function handleLoad() {
    props.balanceRef.current.value = parseInt(
      JSON.parse(localStorage.getItem("balanceRef") || "0")
    );
    loadUpgrade(
      "clickUpgrade",
      parseInt(JSON.parse(localStorage.getItem("Upgradeclick") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker01",
      parseInt(JSON.parse(localStorage.getItem("AC1Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker02",
      parseInt(JSON.parse(localStorage.getItem("AC2Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker03",
      parseInt(JSON.parse(localStorage.getItem("AC3Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker04",
      parseInt(JSON.parse(localStorage.getItem("AC4Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker05",
      parseInt(JSON.parse(localStorage.getItem("AC5Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker06",
      parseInt(JSON.parse(localStorage.getItem("AC6Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker07",
      parseInt(JSON.parse(localStorage.getItem("AC7Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker08",
      parseInt(JSON.parse(localStorage.getItem("AC8Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker09",
      parseInt(JSON.parse(localStorage.getItem("AC9Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "autoClicker10",
      parseInt(JSON.parse(localStorage.getItem("AC10Level") || "0")),
      props.upgradeMap
    );
    //ref card
    loadUpgrade(
      "refClicker01",
      parseInt(JSON.parse(localStorage.getItem("RC1Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker02",
      parseInt(JSON.parse(localStorage.getItem("RC2Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker03",
      parseInt(JSON.parse(localStorage.getItem("RC3Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker04",
      parseInt(JSON.parse(localStorage.getItem("RC4Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker05",
      parseInt(JSON.parse(localStorage.getItem("RC5Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker06",
      parseInt(JSON.parse(localStorage.getItem("RC6Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker07",
      parseInt(JSON.parse(localStorage.getItem("RC7Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker08",
      parseInt(JSON.parse(localStorage.getItem("RC8Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker09",
      parseInt(JSON.parse(localStorage.getItem("RC9Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker10",
      parseInt(JSON.parse(localStorage.getItem("RC10Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker11",
      parseInt(JSON.parse(localStorage.getItem("RC11Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker12",
      parseInt(JSON.parse(localStorage.getItem("RC12Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker13",
      parseInt(JSON.parse(localStorage.getItem("RC13Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "refClicker14",
      parseInt(JSON.parse(localStorage.getItem("RC14Level") || "0")),
      props.upgradeMap
    );
    //ADS card
    loadUpgrade(
      "adsClicker01",
      parseInt(JSON.parse(localStorage.getItem("AD1Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "adsClicker02",
      parseInt(JSON.parse(localStorage.getItem("AD2Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "adsClicker03",
      parseInt(JSON.parse(localStorage.getItem("AD3Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "adsClicker04",
      parseInt(JSON.parse(localStorage.getItem("AD4Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "adsClicker05",
      parseInt(JSON.parse(localStorage.getItem("AD5Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "adsClicker06",
      parseInt(JSON.parse(localStorage.getItem("AD6Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "adsClicker07",
      parseInt(JSON.parse(localStorage.getItem("AD7Level") || "0")),
      props.upgradeMap
    );
    loadUpgrade(
      "adsClicker08",
      parseInt(JSON.parse(localStorage.getItem("AD8Level") || "0")),
      props.upgradeMap
    );

    // console.log("Game loaded");
    loadUpgradeEnergy(
      "energyPool",
      parseInt(JSON.parse(localStorage.getItem("pool") || "0")),
      props.upgradeEnergyMap
    );
    loadUpgradeEnergy(
      "energyfill",
      parseInt(JSON.parse(localStorage.getItem("refill") || "0")),
      props.upgradeEnergyMap
    );
  }

  useEffect(() => {
    //loads latest save on app startup
    handleLoad();
    // eslint-disable-next-line
  }, []);
  /*
    Game is autosaved every 1 minute to increase
    time change 1400 to a higher number, to decrease time between
    saves change 1400 to a lower number.
  */
  const counter = useRef({ value: 0 });
  counter.current.value += 1;
  if (counter.current.value >= 10) {
    //1400
    handleSave();
    counter.current.value = 0;
  }

  function wipeSave() {
    props.balanceRef.current.value = parseInt(JSON.parse("0"));
    loadUpgrade("clickUpgrade", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker01", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker02", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker03", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker04", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker05", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker06", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker07", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker08", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker09", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("autoClicker10", parseInt(JSON.parse("0")), props.upgradeMap);
    //ref card
    loadUpgrade("refClicker01", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker02", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker03", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker04", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker05", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker06", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker07", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker08", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker09", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker10", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker11", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker12", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker13", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgrade("refClicker14", parseInt(JSON.parse("0")), props.upgradeMap);
    loadUpgradeEnergy(
      "energyPool",
      parseInt(JSON.parse("0")),
      props.upgradeEnergyMap
    );
    loadUpgradeEnergy(
      "energyfill",
      parseInt(JSON.parse("0")),
      props.upgradeEnergyMap
    );
    localStorage.removeItem("balanceRef");
    localStorage.removeItem("Upgradeclick");
    localStorage.removeItem("AC1Level");
    localStorage.removeItem("AC2Level");
    localStorage.removeItem("AC3Level");
    localStorage.removeItem("AC4Level");
    localStorage.removeItem("AC5Level");
    localStorage.removeItem("AC6Level");
    localStorage.removeItem("AC7Level");
    localStorage.removeItem("AC8Level");
    localStorage.removeItem("AC9Level");
    localStorage.removeItem("AC10Level");
    //ref card
    localStorage.removeItem("RC1Level");
    localStorage.removeItem("RC2Level");
    localStorage.removeItem("RC3Level");
    localStorage.removeItem("RC4Level");
    localStorage.removeItem("RC5Level");
    localStorage.removeItem("RC6Level");
    localStorage.removeItem("RC7Level");
    localStorage.removeItem("RC8Level");
    localStorage.removeItem("RC9Level");
    localStorage.removeItem("RC10Level");
    localStorage.removeItem("RC11Level");
    localStorage.removeItem("RC12Level");
    localStorage.removeItem("RC13Level");
    localStorage.removeItem("RC14Level");
    localStorage.removeItem("pool");
    localStorage.removeItem("refill");
    props.balanceRef.current.value = parseInt(JSON.parse("0"));
    console.log("Game wiped");
    window.location.reload();
    handleClose();
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <Button
        className="savehide"
        onClick={handleSave}
        style={{ margin: "10px 10px 30px 10px" }}
        variant="contained"
      >
        Save
      </Button>{" "}
      <br />
      <Button
        className="savehide"
        onClick={handleOpen}
        size="small"
        style={{ margin: "10px" }}
        variant="contained"
        color="error"
      >
        Wipe save
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            WARNING
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you REALLY want to wipe your save?
          </Typography>
          <Typography variant="caption">
            You will lose your progress, there is no going back!
          </Typography>
          <Button onClick={wipeSave}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Game saved"
      />
    </>
  );
}

const loadUpgrade = (
  id: string,
  level: number,
  upgradeMap: React.MutableRefObject<Map<string, UpgradeState>>
): void => {
  upgradeMap.current.get(id)!.loadUpgrade(level);
};
const loadUpgradeEnergy = (
  id: string,
  level: number,
  upgradeEnergyMap: React.MutableRefObject<Map<string, UpgradeEnergy>>
): void => {
  // const upgrade = upgradeEnergyMap.current.get(id);
  // if (upgrade) {
  //   upgrade.loadUpgrade(level);
  //}
  upgradeEnergyMap.current.get(id)!.loadUpgrade(level);
};

// import { Button, Box, Typography, Modal, Snackbar } from '@mui/material';
// import UpgradeState from "../classes/upgradeState";
// import React, { useEffect, useRef } from 'react';
// import UpgradeEnergy from '../classes/upgradeEnergy';

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 350,
//   bgcolor: 'rgb(14, 16, 17)',
//   border: '2px solid rgb(141, 130, 114)',
//   boxShadow: 24,
//   p: 3,
// };

// export function SaveGame(props: {
//   balanceRef: React.MutableRefObject<{value: number;}>,
//   upgradeMap: React.MutableRefObject<Map<string, UpgradeState>>,
//   upgradeEnergyMap: React.MutableRefObject<Map<string, UpgradeEnergy>>,
//   setMaxEnergy: React.Dispatch<React.SetStateAction<number>>,
//   setRefillRate: React.Dispatch<React.SetStateAction<number>>,
// }) {
//   const [openSnackbar, setOpenSnackbar] = React.useState(false);

//   function handleSave() {
//     localStorage.setItem("balanceRef", JSON.stringify(props.balanceRef.current.value));
//     localStorage.setItem("Upgradeclick", JSON.stringify(props.upgradeMap.current.get('clickUpgrade')!.level))
//     localStorage.setItem("AC1Level", JSON.stringify(props.upgradeMap.current.get('autoClicker01')!.level))
//     localStorage.setItem("AC2Level", JSON.stringify(props.upgradeMap.current.get('autoClicker02')!.level))
//     localStorage.setItem("AC3Level", JSON.stringify(props.upgradeMap.current.get('autoClicker03')!.level))
//     localStorage.setItem("AC4Level", JSON.stringify(props.upgradeMap.current.get('autoClicker04')!.level))
//     localStorage.setItem("AC5Level", JSON.stringify(props.upgradeMap.current.get('autoClicker05')!.level))
//     localStorage.setItem("AC6Level", JSON.stringify(props.upgradeMap.current.get('autoClicker06')!.level))
//     localStorage.setItem("AC7Level", JSON.stringify(props.upgradeMap.current.get('autoClicker07')!.level))
//     localStorage.setItem("pool",JSON.stringify(props.upgradeEnergyMap.current.get('energyPool')!.level))
//     localStorage.setItem("refill",JSON.stringify(props.upgradeEnergyMap.current.get('energyfill')!.level))
//     setOpenSnackbar(true);
//   }

//   function handleLoad() {
//     props.balanceRef.current.value = parseInt(JSON.parse(localStorage.getItem("balanceRef") || '0'));
//     loadUpgrade('clickUpgrade', parseInt(JSON.parse(localStorage.getItem("Upgradeclick") || '0')), props.upgradeMap)
//     loadUpgrade('autoClicker01', parseInt(JSON.parse(localStorage.getItem("AC1Level") || '0')), props.upgradeMap)
//     loadUpgrade('autoClicker02', parseInt(JSON.parse(localStorage.getItem("AC2Level") || '0')), props.upgradeMap)
//     loadUpgrade('autoClicker03', parseInt(JSON.parse(localStorage.getItem("AC3Level") || '0')), props.upgradeMap)
//     loadUpgrade('autoClicker04', parseInt(JSON.parse(localStorage.getItem("AC4Level") || '0')), props.upgradeMap)
//     loadUpgrade('autoClicker05', parseInt(JSON.parse(localStorage.getItem("AC5Level") || '0')), props.upgradeMap)
//     loadUpgrade('autoClicker06', parseInt(JSON.parse(localStorage.getItem("AC6Level") || '0')), props.upgradeMap)
//     loadUpgrade('autoClicker07', parseInt(JSON.parse(localStorage.getItem("AC7Level") || '0')), props.upgradeMap)

//     const poolLevel = parseInt(JSON.parse(localStorage.getItem("pool") || '0'));
//     const refillLevel = parseInt(JSON.parse(localStorage.getItem("refill") || '0'));

//     loadUpgradeEnergy('energyPool', poolLevel, props.upgradeEnergyMap)
//     loadUpgradeEnergy('energyfill', refillLevel, props.upgradeEnergyMap)

//     props.setMaxEnergy(prev => prev + (poolLevel * 50)); // Adjust as needed
//     props.setRefillRate(prev => prev + (refillLevel * 1)); // Adjust as needed
//   }

//   useEffect(() => {
//     handleLoad();
//     // eslint-disable-next-line
//   }, []);

//   const counter = useRef({ value: 0})
//   counter.current.value+=1;
//   if (counter.current.value >= 10) {
//     handleSave();
//     counter.current.value=0;
//   }

//   function wipeSave() {
//     props.balanceRef.current.value = parseInt(JSON.parse('0'));
//     loadUpgrade('clickUpgrade', parseInt(JSON.parse('0')), props.upgradeMap);
//     loadUpgrade('autoClicker01', parseInt(JSON.parse('0')), props.upgradeMap);
//     loadUpgrade('autoClicker02', parseInt(JSON.parse('0')), props.upgradeMap);
//     loadUpgrade('autoClicker03', parseInt(JSON.parse('0')), props.upgradeMap);
//     loadUpgrade('autoClicker04', parseInt(JSON.parse('0')), props.upgradeMap);
//     loadUpgrade('autoClicker05', parseInt(JSON.parse('0')), props.upgradeMap);
//     loadUpgrade('autoClicker06', parseInt(JSON.parse('0')), props.upgradeMap);
//     loadUpgrade('autoClicker07', parseInt(JSON.parse('0')), props.upgradeMap);
//     loadUpgradeEnergy('energyPool', parseInt(JSON.parse('0')), props.upgradeEnergyMap);
//     loadUpgradeEnergy('energyfill', parseInt(JSON.parse('0')), props.upgradeEnergyMap);
//     localStorage.removeItem("balanceRef");
//     localStorage.removeItem("Upgradeclick");
//     localStorage.removeItem("AC1Level");
//     localStorage.removeItem("AC2Level");
//     localStorage.removeItem("AC3Level");
//     localStorage.removeItem("AC4Level");
//     localStorage.removeItem("AC5Level");
//     localStorage.removeItem("AC6Level");
//     localStorage.removeItem("AC7Level");
//     localStorage.removeItem("pool");
//     localStorage.removeItem("refill");
//     props.balanceRef.current.value = parseInt(JSON.parse('0'));
//     console.log("Game wiped");
//     window.location.reload();
//     handleClose();
//   }

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpenSnackbar(false);
//   };

//   return(
//     <>
//       <Button className='savehide' onClick={handleSave} style={{margin: "10px 10px 30px 10px"}} variant="contained">Save</Button> <br/>
//       <Button onClick={handleOpen} size="small" style={{margin: "10px"}} variant="contained" color="error">Wipe save</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             WARNING
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Do you REALLY want to wipe your save?
//           </Typography>
//           <Typography variant='caption'>
//             You will lose your progress, there is no going back!
//           </Typography>
//           <Button onClick={wipeSave}>Yes</Button>
//           <Button onClick={handleClose}>No</Button>
//         </Box>
//       </Modal>
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={2000}
//         onClose={handleCloseSnackbar}
//         message="Game saved"
//       />
//     </>
//   )
// }

// const loadUpgrade = (
//   id: string,
//   level: number,
//   upgradeMap: React.MutableRefObject<Map<string, UpgradeState>>,
// ): void => {
//   upgradeMap.current.get(id)!.loadUpgrade(level);
// }

// const loadUpgradeEnergy = (
//   id: string,
//   level: number,
//   upgradeEnergyMap: React.MutableRefObject<Map<string, UpgradeEnergy>>,
// ): void => {
//   upgradeEnergyMap.current.get(id)!.loadUpgrade(level);
// }
