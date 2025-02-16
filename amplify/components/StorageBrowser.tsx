import React from 'react';
import { createAmplifyAuthAdapter, createStorageBrowser } from '@aws-amplify/ui-react-storage/browser';
//import { ThemeProvider } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react-storage/styles.css';
import { Amplify } from 'aws-amplify';
//import config from '../../amplify_outputs.json';
const config = require('../../amplify_outputs.json');
//import { storageBrowserTheme } from "../theme"; // Import theme
//const storageBrowserTheme = require('../theme');

// Configure Amplify using the imported configuration
Amplify.configure(config);

// Create the StorageBrowser component with Amplify authentication
export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

// ADD COMMENT TO REDEPLOY AGAIN
//export default function CustomStorageBrowser() {
//  return (
//    <ThemeProvider theme={storageBrowserTheme}>
//      <StorageBrowser />
//    </ThemeProvider>
//  );
//}

