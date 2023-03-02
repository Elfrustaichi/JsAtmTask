let Name = prompt("Bank hesabiniza xos gelmisiz.Adinizi qeyd edin.");
let Surname = prompt("Soyadinizi qeyd edin.");
let Order = 1;
let UserCash = 0;
do {
  let UserMenuOrder = Number(
    prompt(
      "Zehmet olmasa istediyiniz prosesi secin.1-Pul medaxil.2-Pul mexaric.3-Qaliq vesaiti gorme.4-Cixis."
    )
  );

  switch (UserMenuOrder) {
    case 1:
      let CashIn = Number(prompt("Daxil etmek istediyiniz meblegi qeyd edin"));
      while (true) {
        if (CashIn > 0) {
          UserCash = CashInPro(UserCash, CashIn);

          break;
        } else {
          CashIn = prompt("Duzgun mebleg daxil edin!");
          continue;
        }
      }
      break;

    case 2:
      let CashOut = Number(
        prompt("Mexaric etmek istediyiniz meblegi daxil edin.")
      );
      while (true) {
        if (CashOut > 0 && CashOut < UserCash) {
          UserCash = CashOutPro(UserCash, CashOut);

          break;
        } else {
          CashOut = prompt(
            "Duzgun mebleg daxil edin veya hesabinizda yeterince vesait oldugunnan emin olun!"
          );
          continue;
        }
      }
      break;

    case 3:
      prompt(
        Name +
          "" +
          Surname +
          "sizin hesabinizda " +
          UserCash +
          " azn vesait var."
      );
      break;

    case 4:
      Order = 0;

      break;

    default:
      Number(prompt("Duzgun proses nomresi qeyd olunmayib."));
  }
} while (Order !== 0);

function CashInPro(UserCash, CashIn) {
  UserCash = UserCash + CashIn;
  prompt(Name + "" + Surname + " sizin balansa" + CashIn + " azn yuklendi.");
  return UserCash;
}

function CashOutPro(UserCash, CashOut) {
  UserCash = UserCash - CashOut;
  prompt(
    Name + "" + Surname + " sizin balansdan" + CashOut + " azn mexaric olundu."
  );
  return UserCash;
}
