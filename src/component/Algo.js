function Algo() {
  const text = "AzeRtY";
  const minus = text.toLocaleLowerCase();
  const modif = minus.split("");
  let essai = [];

  for (let i = 0; i < modif.length; i++) {
    let essai2 = [];
    for (let y = 0; y <= i; y++) {
      essai2.push(modif[i]);
    }
    essai.push(essai2);
  }

  console.log(essai);
  let essay = [];

  for (let i = 0; i < essai.length; i++) {
    essay.push(essai[i].join(""));
  }
  console.log(essay);
  let finish = [];
  for (let i = 0; i < essay.length; i++) {
    const result = essay[i].charAt(0).toUpperCase() + essay[i].slice(1);
    finish.push(result);
  }
  console.log(finish);

  const oka = finish.join("-");

  const nombre = 8;
  let jeux = 10;
  let fifi;
  for (let i = 0; i < nombre; i++) {
    fifi = jeux += 1;
  }
  console.log(fifi);
  // console.log(oka);
  // const texte = "je m'apelle adrien";
  // const modiff = texte.split(" ");
  // console.log(modiff);
  // let finish = [];
  // for (let i = 0; i < modif.length; i++) {
  //   const result = modif[i].charAt(0).toUpperCase() + modif[i].slice(1);
  //   finish.push(result);
  // }
  // let final = finish.join(" ");
  // console.log(final);
  // for (let i = 0; i < modif.length; i += 3) {}

  // const s = "test";
  // const t = s.split("");
  // const Le = t.length;
  // const Ml = Le % 2;
  // let result = [];
  // const id = Le / 2;
  // if (Ml === 0) {
  //   result.push(t[id - 1]) + result.push(t[id]);
  // }

  // const FR = result.join("");
  // console.log(FR);

  return finish;
}

export default Algo;
