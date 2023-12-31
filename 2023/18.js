/**
 * NOTES
 */

/**
 * SETUP & HELPERS
 */

const TEST_INPUT = `
R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)
`;

const REAL_INPUT = `
L 2 (#274630)
U 7 (#742433)
R 7 (#274632)
D 12 (#5a1523)
R 2 (#552252)
U 12 (#989093)
R 7 (#39f342)
U 8 (#989091)
L 6 (#1dae62)
U 4 (#10bf93)
L 7 (#32c3f2)
D 4 (#0892e3)
L 3 (#380422)
U 4 (#29e1f3)
L 3 (#3527b0)
D 3 (#32d823)
L 5 (#3527b2)
D 5 (#4f8123)
L 4 (#642cc0)
D 4 (#4f7e63)
L 6 (#209f50)
D 6 (#387f13)
L 5 (#821880)
D 5 (#4d80b3)
L 9 (#5e6d30)
D 9 (#553aa1)
L 4 (#0d0cf0)
U 10 (#5737f1)
L 9 (#0d0cf2)
U 3 (#2c51d1)
L 8 (#24d6f0)
U 7 (#957a93)
R 6 (#4a8310)
U 6 (#4349d3)
R 2 (#31af40)
U 6 (#5484a3)
L 8 (#377a52)
D 2 (#1edf01)
L 8 (#693b42)
D 3 (#1edf03)
L 10 (#5ec0e2)
D 3 (#656003)
L 8 (#10a770)
D 7 (#32bf93)
R 7 (#664850)
D 2 (#32db91)
R 8 (#1c7270)
D 10 (#9ccd43)
R 3 (#6ad5c0)
D 8 (#2e50e3)
L 8 (#451b80)
D 3 (#72d673)
L 6 (#606ad0)
U 4 (#1dc933)
L 4 (#7d4960)
D 4 (#425df3)
L 7 (#6c14a2)
D 4 (#193c93)
L 10 (#891d42)
D 4 (#5997a3)
L 4 (#185672)
D 5 (#2b10b3)
L 8 (#837e22)
U 7 (#371261)
L 5 (#3da452)
U 8 (#0b1d61)
L 6 (#5714f2)
D 4 (#2be861)
L 11 (#3e18a2)
D 7 (#6d9df1)
L 4 (#4f3a42)
D 4 (#269ae1)
L 3 (#330b12)
D 3 (#04d001)
L 6 (#020b02)
D 5 (#0ae901)
L 2 (#5eac70)
D 7 (#749f41)
L 6 (#5eac72)
D 4 (#39a091)
R 5 (#25e982)
D 5 (#29ed03)
R 4 (#46aac2)
U 5 (#33e203)
R 5 (#638592)
D 2 (#334443)
R 6 (#729482)
U 5 (#30c003)
R 4 (#554c32)
D 5 (#1487b3)
R 5 (#636080)
D 5 (#9945d3)
L 4 (#27d310)
D 9 (#39a143)
L 8 (#268500)
U 9 (#00fb73)
L 3 (#75c380)
D 4 (#00fb71)
L 7 (#4a94f0)
D 7 (#1707c3)
L 3 (#1a0352)
D 5 (#112b93)
L 4 (#47ff40)
D 3 (#5d5563)
R 10 (#7fabd0)
D 5 (#0054e3)
L 10 (#1ca5d2)
D 6 (#1811d3)
L 6 (#0e9a62)
U 5 (#301813)
L 3 (#471be2)
U 9 (#301811)
L 5 (#554f02)
U 12 (#56a913)
L 5 (#70b630)
U 2 (#3c7d03)
L 3 (#5334b0)
U 3 (#88eca3)
L 3 (#5e5ec0)
U 5 (#190663)
L 5 (#0727f0)
D 5 (#4bd611)
L 6 (#729bf0)
U 2 (#4519c3)
L 4 (#14a4b0)
U 2 (#5e96f3)
L 7 (#264850)
U 9 (#2e2441)
L 6 (#683450)
U 6 (#2e2443)
R 8 (#1cc7d0)
U 8 (#141153)
R 7 (#15b9c2)
U 6 (#59df73)
R 7 (#565bb2)
U 4 (#59df71)
R 4 (#53d3b2)
U 8 (#2ff203)
R 8 (#387260)
U 2 (#3f7fb3)
R 7 (#32edb0)
U 8 (#2f7463)
R 6 (#67d5b0)
U 6 (#5b3001)
L 4 (#2a24f0)
U 5 (#629821)
L 9 (#2a24f2)
D 5 (#683411)
L 3 (#18f510)
U 8 (#30abe1)
R 3 (#06a2c0)
U 2 (#4bd613)
R 13 (#60ee30)
U 5 (#6fadf3)
L 9 (#384c30)
U 6 (#30a8f3)
L 4 (#579dc0)
U 8 (#19d963)
L 4 (#3c7ce0)
U 8 (#316373)
L 9 (#25ca00)
U 4 (#429873)
L 9 (#59be70)
D 5 (#5b46e3)
L 5 (#59be72)
D 5 (#18e4b3)
L 6 (#5e1d50)
D 10 (#3e9e63)
L 3 (#459ec0)
D 11 (#44b1c1)
L 8 (#324152)
D 3 (#4c2b31)
L 5 (#324150)
D 8 (#22cf21)
L 7 (#36aeb0)
U 7 (#3b6a11)
L 7 (#1a7740)
U 5 (#518911)
L 9 (#61d4a0)
U 9 (#323d91)
L 3 (#5d5b40)
U 7 (#661041)
L 5 (#484a82)
U 8 (#087991)
L 4 (#38e512)
U 6 (#5fd7f1)
L 5 (#806972)
U 7 (#685183)
L 4 (#6671e2)
U 10 (#8f0d81)
L 6 (#2feae0)
D 10 (#201181)
L 6 (#507ba2)
U 8 (#62d101)
L 3 (#19af52)
U 11 (#4d1871)
L 8 (#6a2af0)
U 4 (#135721)
R 4 (#4260e0)
U 4 (#443a41)
R 6 (#107d40)
U 8 (#0aacb1)
R 5 (#5df350)
U 7 (#30bf53)
R 6 (#51ce90)
U 10 (#30bf51)
L 3 (#18bb20)
U 6 (#0aacb3)
L 5 (#06f190)
U 4 (#03dc91)
L 4 (#71bcb0)
U 9 (#4ce7b1)
R 7 (#81ff02)
U 3 (#6b0b11)
R 5 (#864392)
U 3 (#4bd3e3)
R 5 (#a07392)
D 6 (#3694a3)
L 7 (#16a222)
D 5 (#826881)
R 7 (#049c02)
D 3 (#2813e1)
R 5 (#7c6110)
U 14 (#40a881)
R 4 (#333260)
D 6 (#062261)
R 9 (#51ee00)
D 5 (#64b4e1)
R 2 (#2da420)
D 5 (#a4ab31)
R 10 (#38e550)
D 7 (#156261)
R 2 (#0b3aa0)
D 6 (#78a263)
R 7 (#926d10)
D 5 (#4e8ce3)
L 11 (#136420)
D 8 (#5e2713)
R 11 (#58d872)
D 4 (#772153)
R 4 (#58d870)
D 6 (#3f8e33)
R 7 (#136422)
U 6 (#2f6493)
R 4 (#851de0)
U 3 (#4b0281)
R 10 (#79ea40)
U 9 (#366871)
R 6 (#3a4780)
U 4 (#7fdd21)
R 3 (#54ed42)
U 6 (#11cd91)
R 7 (#4fae92)
U 9 (#6b0051)
R 2 (#4fae90)
U 10 (#4616d1)
R 4 (#54ed40)
U 5 (#473da1)
R 4 (#39cba0)
U 10 (#32db93)
R 5 (#7edab0)
U 2 (#1c7dc1)
R 4 (#2a7570)
D 8 (#5d0fd1)
R 7 (#5588b0)
U 5 (#48a261)
R 5 (#1bb440)
U 6 (#187c71)
L 6 (#32c080)
U 5 (#29f291)
R 6 (#1aa790)
U 5 (#54cf81)
R 3 (#7265a0)
U 5 (#4d8a91)
L 8 (#204d90)
U 7 (#4d8a93)
L 3 (#834a30)
U 3 (#09c801)
R 11 (#26e812)
U 6 (#7a9971)
R 6 (#3755c2)
D 9 (#21dba1)
R 7 (#3e8ea2)
D 8 (#2bb851)
R 6 (#345db0)
D 3 (#0c8f41)
L 3 (#28b9b2)
D 5 (#9280c1)
L 5 (#28b9b0)
D 3 (#228ac1)
L 7 (#0df740)
D 5 (#875d71)
R 11 (#4a5390)
D 5 (#8c7ac3)
R 4 (#417ff0)
D 4 (#12dc63)
R 11 (#5a6802)
U 8 (#616af3)
R 3 (#5a6800)
U 5 (#64b733)
R 3 (#99d5b0)
U 6 (#028b31)
R 9 (#0faf30)
D 4 (#6d4e01)
R 2 (#3a2e20)
D 5 (#510df1)
R 3 (#3a2e22)
U 3 (#436be1)
R 8 (#0faf32)
U 7 (#612641)
L 8 (#53daf0)
U 9 (#4e71a1)
R 5 (#303c32)
U 5 (#3f3233)
R 8 (#883082)
D 11 (#6551a1)
R 3 (#2bd002)
D 8 (#0827a1)
R 2 (#41c340)
D 5 (#6f0651)
R 7 (#53d550)
D 4 (#33aa31)
R 7 (#959892)
D 7 (#1a9fb1)
R 3 (#530212)
D 7 (#21c6e1)
L 7 (#2cccb2)
D 8 (#3904a3)
L 3 (#55d040)
U 8 (#2571f3)
L 6 (#1cd6f2)
D 2 (#a6b293)
L 5 (#1cd6f0)
D 9 (#25fc03)
R 8 (#55d042)
D 4 (#216b33)
R 3 (#4b8c82)
U 4 (#3f3231)
R 7 (#0c4122)
D 6 (#2e8ab1)
R 3 (#456be2)
D 7 (#7e5b83)
R 4 (#4c7d22)
D 2 (#7e5b81)
R 8 (#653352)
U 7 (#5fbd33)
L 3 (#045090)
U 8 (#084453)
L 3 (#5ac5f0)
U 6 (#191693)
R 6 (#0266c0)
U 5 (#2aa953)
R 4 (#849b60)
U 7 (#710533)
R 11 (#870222)
D 4 (#1a6bb3)
R 2 (#6c7bd0)
D 11 (#070a93)
R 2 (#18f422)
D 4 (#23a2c3)
R 11 (#6d8742)
D 5 (#23a2c1)
R 9 (#40c662)
D 6 (#5e1ff3)
L 6 (#045092)
D 3 (#555013)
L 5 (#1b7a52)
D 7 (#1223b3)
R 9 (#88fb52)
D 4 (#1223b1)
R 2 (#081112)
D 5 (#021341)
R 8 (#15ace2)
U 8 (#9fcf21)
R 4 (#3c2d32)
U 7 (#1d7ea1)
L 4 (#801282)
U 3 (#6e9741)
R 5 (#920a22)
U 5 (#346411)
R 9 (#565a92)
U 4 (#6835d1)
R 7 (#1beb32)
U 10 (#274661)
R 7 (#837f12)
U 6 (#151c81)
R 11 (#2e8672)
D 6 (#045641)
R 3 (#6bd070)
U 2 (#8c36f1)
R 5 (#188a00)
U 11 (#3f41b1)
L 5 (#438682)
U 4 (#811531)
L 9 (#464c82)
U 3 (#41f311)
L 7 (#89d300)
U 4 (#07c411)
L 5 (#71f5b0)
U 6 (#3c3e01)
L 5 (#824660)
D 10 (#40e461)
L 8 (#005ef0)
U 6 (#2f3c93)
L 8 (#541d20)
U 6 (#7291b1)
R 4 (#176280)
U 11 (#7291b3)
R 3 (#4c0380)
U 4 (#2f3c91)
R 13 (#447a00)
D 4 (#40e463)
R 12 (#134f60)
U 7 (#08ebc1)
R 5 (#000250)
U 4 (#2ec1e1)
R 7 (#08c350)
U 6 (#6b24b3)
R 4 (#137870)
U 6 (#0e1503)
R 11 (#96d010)
D 3 (#410e73)
R 2 (#0cfb40)
D 4 (#433481)
R 3 (#159fe0)
D 7 (#2e33d1)
R 5 (#159fe2)
D 6 (#48dfd1)
R 5 (#105850)
D 4 (#5f6db1)
L 8 (#1f2742)
D 8 (#421cc1)
L 5 (#2f0ce2)
D 5 (#24b4d3)
L 7 (#701502)
D 6 (#24b4d1)
L 4 (#121892)
D 5 (#038801)
R 3 (#055ce2)
D 3 (#0197b1)
R 5 (#09cfa2)
D 6 (#2ef9b3)
R 6 (#86b022)
D 4 (#2ef9b1)
R 2 (#18b6d2)
D 11 (#1b0c63)
R 5 (#208782)
D 3 (#377051)
R 3 (#767142)
D 13 (#377053)
L 5 (#31fba2)
D 6 (#1b0c61)
R 4 (#0b0542)
D 9 (#0197b3)
R 2 (#516d92)
D 2 (#26a151)
R 9 (#590c20)
D 8 (#59d3f1)
L 11 (#64b270)
D 8 (#9a2131)
R 10 (#34a6c0)
U 5 (#3300e1)
R 5 (#943c80)
U 2 (#45c371)
R 11 (#2904a0)
U 3 (#4f4011)
R 5 (#1045f2)
U 9 (#9f9df1)
L 5 (#1045f0)
U 5 (#03ff31)
R 7 (#48cc20)
U 3 (#174d21)
L 2 (#65e6b0)
U 9 (#360483)
L 6 (#42a0b0)
U 3 (#89d053)
L 9 (#3f0d10)
U 10 (#744613)
L 5 (#503e00)
U 3 (#9f85a3)
L 5 (#156fd0)
U 3 (#3a3a03)
L 4 (#7aa2a0)
U 8 (#690943)
L 6 (#5412a0)
U 5 (#262f51)
R 4 (#03c872)
U 6 (#521ed1)
R 6 (#193322)
U 4 (#674f11)
R 3 (#6f2462)
U 10 (#5131a1)
R 2 (#1155f2)
U 6 (#525651)
R 11 (#033872)
U 4 (#995501)
R 11 (#182650)
U 7 (#475891)
R 6 (#24df30)
D 9 (#33eb31)
R 4 (#24df32)
U 9 (#465211)
R 7 (#182652)
U 9 (#3aa201)
R 9 (#033870)
U 3 (#1a0ae1)
R 5 (#22b482)
D 6 (#56b2f1)
R 11 (#623122)
U 6 (#817c81)
R 9 (#623120)
U 4 (#38f971)
R 5 (#626642)
D 5 (#63e353)
R 2 (#0d8b02)
D 8 (#4fe853)
R 5 (#4789f2)
D 12 (#2cb943)
R 6 (#4f8292)
D 3 (#3ea3f3)
R 6 (#533a72)
D 3 (#78a803)
R 5 (#52bd42)
D 11 (#78a801)
R 3 (#075332)
D 5 (#201683)
R 6 (#1da752)
D 6 (#41e543)
R 3 (#995702)
D 5 (#0a2153)
R 6 (#4d9f32)
D 10 (#534cd3)
L 8 (#3f7340)
D 2 (#3892a3)
L 5 (#3f7342)
D 10 (#35d9a3)
L 7 (#0ee870)
U 10 (#5e8cb3)
L 7 (#0aed10)
D 9 (#5ea061)
L 6 (#388af0)
D 8 (#690071)
L 11 (#50f1b0)
D 3 (#24d793)
L 5 (#0c6f42)
D 6 (#75d573)
L 2 (#0c6f40)
D 2 (#2cf3d3)
L 10 (#43a410)
D 3 (#260e33)
R 12 (#1c47d2)
D 6 (#417d13)
L 6 (#61c132)
D 8 (#5496b1)
L 3 (#532302)
D 8 (#5496b3)
L 7 (#422062)
D 4 (#1f66c1)
L 7 (#527132)
D 9 (#393951)
L 6 (#293122)
U 4 (#58cf41)
L 6 (#2124e2)
U 9 (#49f2f1)
L 4 (#966df2)
D 9 (#033483)
L 3 (#3276c2)
D 3 (#71e053)
L 3 (#5912a2)
D 8 (#647a43)
L 8 (#58caf2)
D 5 (#74f4e3)
L 3 (#5033a2)
U 3 (#345423)
L 3 (#14f432)
U 7 (#44c9c3)
L 4 (#8c0842)
U 6 (#6cd493)
L 6 (#0ca462)
D 5 (#2dd8d3)
L 11 (#6ae062)
D 5 (#561703)
R 11 (#510c02)
D 5 (#55d0c3)
L 5 (#510c00)
D 5 (#227663)
L 4 (#26ebc2)
U 6 (#37ff33)
L 11 (#546b60)
D 4 (#3bcd93)
L 7 (#56a5b0)
D 2 (#3bcd91)
L 7 (#105310)
D 4 (#4fcbf3)
L 8 (#23b2a2)
D 5 (#a78353)
R 8 (#378f32)
D 3 (#0083b3)
R 8 (#33e382)
D 6 (#a80701)
L 3 (#2c3ed2)
D 9 (#4b8ea3)
L 6 (#7d4c12)
U 9 (#05b6a1)
L 7 (#53a692)
D 7 (#2c9d93)
L 7 (#9fd9b2)
D 4 (#2c9d91)
L 3 (#376372)
D 8 (#05b6a3)
L 6 (#15c4e2)
D 7 (#2eb9b3)
L 8 (#75eb42)
D 4 (#653fc3)
L 12 (#75eb40)
U 2 (#7f4873)
L 4 (#0286d2)
U 12 (#9fd9f3)
`;

// Get array of parsed lines.
const getParsedInputLines = input => {
  return input.split('\n').filter(n => n);
}

/**
 * PART ONE
 */

const getPartOneSolution = input => {
  const parsedInput = getParsedInputLines(input);

  const moves = parsedInput.map(line => {
    const [direction, spaces, color] = line.split(' ');
    return {
      direction,
      spaces: parseInt(spaces),
      color,
    }
  })

  let x = 300;
  let y = 300;
  const traveledCoordinates = [[y,x]];

  let minX = 0, maxX = 0, minY = 0, maxY = 0;
  const map = new Array(y*2).fill('.').map(val => new Array(x*2).fill('.'));

  let vertices = [[x,y]];
  let distanceTraveled = 0;
  moves.forEach((move, index) => {

    distanceTraveled += move.spaces;
    if (move.direction == 'L') {
      for (let i = 1; i <= move.spaces; i++) {
        x--;
        traveledCoordinates.push([y,x]);
      }
    }
    else if (move.direction == 'R') {
      for (let i = 1; i <= move.spaces; i++) {
        x++;
        traveledCoordinates.push([y,x]);
      }
    }
    else if (move.direction == 'U') {
      for (let i = 1; i <= move.spaces; i++) {
        y--;
        traveledCoordinates.push([y,x]);
      }
    }
    else if (move.direction == 'D') {
      for (let i = 1; i <= move.spaces; i++) {
        y++;
        traveledCoordinates.push([y,x]);
      }
    }

    if (index != moves.length - 1) {
      vertices.push([x,y]);
    }
  });

  //console.log(distanceTraveled,vertices);

  let shoelaceTotal = 0;
  for (let i = 0; i < vertices.length; i++ ) {
    const nextIndex = (i + 1) % vertices.length;
    shoelaceTotal += (vertices[i][0] * vertices[nextIndex][1]) - (vertices[nextIndex][0] * vertices[i][1])
  };

  console.log(.5 * shoelaceTotal + distanceTraveled/2 + 1);

  const rowGroupedTraveledCoordinates = [];
  traveledCoordinates.forEach(([y, x]) => {
    map[y][x] = '#'
    rowGroupedTraveledCoordinates[y] = rowGroupedTraveledCoordinates[y]??[]
    rowGroupedTraveledCoordinates[y].push(x);
  });

  map.forEach((row, i) => {
    const num = i < 10 ? '0' + i : `${i}`;
    //console.log(row.join(''));
  })

  let total = 0;

  // map.forEach((row, index) => {
  //   const rowString = row.join('');
  //   console.log('\n\n', rowString);

  //   let startRegex = /\.#\.#/gi, startResult, indices = [];
  //   while ( (startResult = startRegex.exec(rowString)) ) {
  //     indices.push(startResult.index);
  //   }

  //   console.log(total, indices);
  // });

  // map.forEach((row, index) => {
  //   let prevChar = '.';
  //   let prevPrevChar = '.';
  //   // console.log('\n\n---------', index);
  //   let counting = false;
  //   let counter = 0;

  //   const rowString = row.join('');
  //   console.log('\n', rowString);

  //   row.forEach((char, indexX) => {

  //     if (char == '#' || counting) {
  //       total++;
  //     }

  //     if (char == '.' && prevChar == '#' && prevPrevChar == '.') {
  //       counting = !counting;

  //       // if (!counting) {
  //       //   total += counter;
  //       //   counter = 0;
  //       // }
  //     }

  //     if (char == '.' && counting) {
  //       counter++;
  //     }

  //     prevPrevChar = prevChar;
  //     prevChar = char;

  //     console.log(indexX, char, counting, counter, total);
  //   });


  // });

  return total;
};
console.log(getPartOneSolution(REAL_INPUT));

/**
 * PART TWO
 */

const getPartTwoSolution = input => {

};
console.log(getPartTwoSolution(TEST_INPUT));