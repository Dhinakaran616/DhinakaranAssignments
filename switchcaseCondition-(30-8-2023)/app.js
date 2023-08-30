// Switch case condition

let role = "teamlead";

switch (role) {
    case "manager":
    console.log("They have all access");
    break;
    case "teamlead":
    console.log("They have only team members access");
    break;
    case "developer":
    console.log("They have only Developer team access");
    break;
    case "tester":
    console.log("They have only Tester tool access");
    break;
    case "maintenance":
    console.log("They have only Maintain the application/webpage");
    break;
  default:
    console.log("No access");
}