import React from "react";
import "./claim.css";

export function Claimtk() {
  return (
    <div className="Claim">
      <div className="claimtoken">
        {" "}
        <h2>
          Airdrop can claim on October 31.Please don't use your CEX wallet
          address.
        </h2>
        {/* <h3>Recommand Wallet:Metamask,Coinbase and trust wallet</h3> */}
      </div>
    </div>
  );
}

//

// import React, { useEffect, useState } from "react";
// import { db } from "../../firebase";
// import { ref, onValue, get, update } from "firebase/database";
// import "./claim.css";

// export function Claimtk() {
//   const [totalTokens, setTotalTokens] = useState<number>(0);
//   const [userId, setUserId] = useState<string | null>(null);
//   const [claimableTokens, setClaimableTokens] = useState<number>(0);
//   const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
//   const [pendingState, setPendingState] = useState<boolean | null>(null); // Track the pending state
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const initTelegram = () => {
//       const tg = window.Telegram.WebApp;
//       tg.ready();
//       console.log("Telegram Web App SDK initialized");

//       const user = tg.initDataUnsafe?.user;

//       if (user) {
//         setUserId(user.id.toString());
//         fetchUserWallet(user.id.toString());
//         fetchPendingState(user.id.toString());
//       }
//     };

//     if (window.Telegram) {
//       initTelegram();
//     } else {
//       window.addEventListener("TelegramWebAppReady", initTelegram);
//     }

//     return () => {
//       window.removeEventListener("TelegramWebAppReady", initTelegram);
//     };
//   }, []);

//   const fetchUserWallet = async (userId: string) => {
//     const userRef = ref(db, "users/" + userId);
//     try {
//       const snapshot = await get(userRef);
//       if (snapshot.exists()) {
//         const userData = snapshot.val();
//         const wallet = userData?.addresswallet?.polygonwallet || null;
//         setConnectedWallet(wallet);
//       } else {
//         setConnectedWallet(null);
//       }
//     } catch (error) {
//       console.error("Error fetching wallet address:", error);
//       setConnectedWallet(null);
//     }
//   };

//   // Fetch pending state from Firebase
//   const fetchPendingState = async (userId: string) => {
//     const userRef = ref(db, `users/${userId}/addresswallet`);
//     try {
//       const snapshot = await get(userRef);
//       if (snapshot.exists()) {
//         const userData = snapshot.val();
//         setPendingState(userData?.pendingstate || false);
//       } else {
//         setPendingState(false); // If no pending state exists, assume it's not pending
//       }
//     } catch (error) {
//       console.error("Error fetching pending state:", error);
//     }
//   };

//   useEffect(() => {
//     if (userId) {
//       const exchangeRef = ref(db, `users/${userId}/exchanges/tokens`);
//       const unsubscribe = onValue(exchangeRef, (snapshot) => {
//         const tokens = snapshot.val();
//         setTotalTokens(tokens || 0);

//         const claimable = tokens ? tokens * 0.8 : 0;
//         setClaimableTokens(claimable);
//       });

//       return () => unsubscribe();
//     }
//   }, [userId]);

//   const handleClaimSubmit = async () => {
//     if (!connectedWallet || totalTokens <= 0) {
//       setErrorMessage(
//         connectedWallet
//           ? "You don't have enough tokens to claim."
//           : "Please connect your wallet before claiming."
//       );
//       return;
//     }

//     if (!userId) return;

//     const userRef = ref(db, `users/${userId}/addresswallet`);

//     try {
//       await update(userRef, {
//         pendingstate: true, // Set the claim as pending
//         claimstate: false
//       });
//       console.log("Claim submitted successfully");
//       setPendingState(true); // Set pending state to true after submission
//       setErrorMessage(null);
//     } catch (error) {
//       console.error("Error updating claim state:", error);
//       setErrorMessage("Error submitting claim. Please try again.");
//     }
//   };

//   return (
//     <div className="Claim">
//       {pendingState ? (
//         <div className="pendingMessage">
//           <p>Your claim is pending. Please wait for approval.</p>
//         </div>
//       ) : (
//         <div>
//           <div className="claimtoken">
//             <div className="claimnote">
//               <p>Total Token - {totalTokens}</p>
//               <p>Transition fee - 20%</p>
//               <hr />
//               <p>Claimable Token - {claimableTokens}</p>
//             </div>
//           </div>

//           <button
//             className="claimbutton"
//             onClick={handleClaimSubmit}
//             // disabled={!connectedWallet || totalTokens <= 0}
//           >
//             Claim
//           </button>
// <br />
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//         </div>
//       )}
//     </div>
//   );
// }
