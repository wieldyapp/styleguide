import { openDB, deleteDB } from 'https://cdn.skypack.dev/idb';

const SYSTEM_DB_NAME = 'wieldy';

export const dbType = {
  SYSTEM: 1,
  WORKSPACE: 2
}

export const dbManager = {

  async init() {
    console.log('init db manager')
    await this.open(dbType.SYSTEM, SYSTEM_DB_NAME);
  },

  async open(type, name, version = 1) {

    const db = await openDB(name, version, {

      upgrade(db, oldVersion, newVersion, transaction) {

        switch (type) {
          case dbType.SYSTEM:
            console.log('open system database');
            break;
          case dbType.WORKSPACE:
            console.log('open workspace db');
            break;
          default:
            console.log('open system database');
        };

        console.log("Version: " + db.version);
        const meta = db.createObjectStore('meta');

      },
      blocked() {
        // …
      },
      blocking() {
        // …
      },
      terminated() {
        // …
      },
    });

    return db;

  },

  async remove(name) {
    await deleteDB(name, {
      blocked() {
        // …
      },
    });
  }

  // Clean up stale databases

};