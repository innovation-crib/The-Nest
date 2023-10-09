import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { environment } from '../environments/environment';
import { importProvidersFrom } from '@angular/core';

const firebaseConfig = importProvidersFrom(
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(() => {
    const auth = getAuth();
    if (location.hostname === 'localhost') {
      connectAuthEmulator(auth, 'http://127.0.0.1:9099', {
        disableWarnings: true,
      });
    }
    return auth;
  }),
  provideFirestore(() => {
    const firestore = getFirestore();
    if (location.hostname === 'localhost') {
      connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
    }
    return firestore;
  }),
  provideFunctions(() => {
    const functions = getFunctions();
    if (location.hostname === 'localhost') {
      connectFunctionsEmulator(functions, '127.0.0.1', 5001);
    }
    return functions;
  }),

  provideStorage(() => {
    const storage = getStorage();
    if (location.hostname === 'localhost') {
      connectStorageEmulator(storage, '127.0.0.1', 5001);
    }
    return storage;
  }),
  provideAnalytics(() => {
    const analytics = getAnalytics();
    if (location.hostname === 'localhost') {
      analytics.app.automaticDataCollectionEnabled = false;
    }
    return analytics;
  }),
  providePerformance(() => {
    const performance = getPerformance();
    if (location.hostname === 'localhost') {
      performance.dataCollectionEnabled = false;
    }
    return performance;
  }),
  provideMessaging(() => {
    const messaging = getMessaging();
    return messaging;
  }),

  provideRemoteConfig(() => {
    const remoteConfig = getRemoteConfig();
    return remoteConfig;
  })
);

export default firebaseConfig;
