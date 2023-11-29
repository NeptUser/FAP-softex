class SecuritySystem {
  constructor() {
    this.secretBasePassword = "password123";
  }

  static getInstance() {
    if (!SecuritySystem.instance) {
      SecuritySystem.instance = new SecuritySystem();
    }
    return SecuritySystem.instance;
  }

  accessSecretBase(password) {
    if (password === this.secretBasePassword) {
      console.log("Access granted to the Secret Base.");
    } else {
      console.log("Access denied.");
    }
  }
}

// Example of using the Singleton SecuritySystem
const securitySystem = SecuritySystem.getInstance();
securitySystem.accessSecretBase("password123");
securitySystem.accessSecretBase("password456");
