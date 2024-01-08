import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { ConnectWallet, Web3Button, useContract, useContractRead, useContractWrite, useContractEvents, useAddress, useStorage, MediaRenderer } from "@thirdweb-dev/react";
import { useState, useEffect } from 'react';
import Web3 from 'web3';


function Review() {
    const [layout, setLayout] = React.useState(undefined);
    return (
      <div>
        <h1>Review Page</h1>
        <h2>Coming Soon!</h2>
      </div>
    );
  }

export default Review;
