import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { connection, host } from "../utils/constants";
import { Transaction } from "@solana/web3.js";
import { Buffer } from "buffer";

export default function Admin() {
  const { sendTransaction } = useWallet();
  const [updateAmount, setUpdateAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [tokenPrice, setTokenPrice] = useState("");

  const handleStart = async () => {
    try {
      const response = await fetch(`${host}/api/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: tokenPrice,
          tokens: tokenAmount,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const {
        base64Transaction,
        minContextSlot,
        blockhash,
        lastValidBlockHeight,
      } = data;
      const decodedTx = Buffer.from(base64Transaction, "base64");
      const transaction = Transaction.from(decodedTx);

      //Send Transaction
      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });
      console.log("info", "Transaction sent:", signature);

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });
      console.log("success", "Transaction successful!", signature);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`${host}/api/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tokenprice: updateAmount,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const {
        base64Transaction,
        minContextSlot,
        blockhash,
        lastValidBlockHeight,
      } = data;
      const decodedTx = Buffer.from(base64Transaction, "base64");
      const transaction = Transaction.from(decodedTx);

      //Send Transaction
      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });
      console.log("info", "Transaction sent:", signature);

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });
      console.log("success", "Transaction successful!", signature);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClose = async () => {
    try {
      const response = await fetch(`${host}/api/close`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const {
        base64Transaction,
        minContextSlot,
        blockhash,
        lastValidBlockHeight,
      } = data;
      const decodedTx = Buffer.from(base64Transaction, "base64");
      const transaction = Transaction.from(decodedTx);

      //Send Transaction
      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });
      console.log("info", "Transaction sent:", signature);

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });
      console.log("success", "Transaction successful!", signature);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "50px",
      }}
    >
      <div>
        <WalletMultiButton />
      </div>
      <div>
        Number of tokens for Presale:
        <input
          style={{ margin: "0px 20px", color: "black" }}
          onChange={(e) => setTokenAmount(e.target.value)}
        />
        Price of each token:
        <input
          style={{ margin: "0px 20px", color: "black" }}
          onChange={(e) => setTokenPrice(e.target.value)}
        />
        <button onClick={handleStart} style={{ backgroundColor: "green" }}>
          Start Presale
        </button>
      </div>
      <div>
        <input
          style={{ marginRight: "20px", color: "black" }}
          onChange={(e) => setUpdateAmount(e.target.value)}
        />
        <button onClick={handleUpdate} style={{ backgroundColor: "blue" }}>
          Update Token Price
        </button>
      </div>
      <div>
        <button onClick={handleClose} style={{ backgroundColor: "red" }}>
          Stop Presale
        </button>
      </div>
    </div>
  );
}
