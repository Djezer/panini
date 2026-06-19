export const ALREADY_GOT = {
  "MEX 11":true,"RSA 11":true,"MAR 19":true,"URU 15":true,
  "ALG 3":true,"ARG 19":true,"POR 12":true,"POR 15":true,
  "UZB 6":true,"GHA 10":true,"PAN 15":true,
  "RSA 5":true,"QAT 6":true,"QAT 7":true,"BRA 15":true,"MAR 5":true,
  "HAI 12":true,"SCO 5":true,"PAR 6":true,"TUR 6":true,
  "GER 7":true,"GER 5":true,"GER 15":true,"CIV 16":true,"CIV 6":true,
  "CUW 13":true,"ECU 5":true,"NED 19":true,"NED 8":true,
  "SWE 11":true,"BEL 18":true,"EGY 18":true,"ESP 14":true,
  "CPV 20":true,"CPV 5":true,"FRA 14":true,"SEN 14":true,
  "IRQ 6":true,"IRQ 18":true,"NOR 6":true,"ALG 18":true,"ALG 8":true,
  "AUT 1":true,"AUT 3":true,"AUT 17":true,"JOR 8":true,
  "POR 2":true,"POR 3":true,"COL 7":true,"PAN 10":true,"CRO 7":true
};

export const RECENT_DOUBLES = [];

// Codes des doubles récemment reçus (mis en surbrillance dans l'onglet doubles)
export const NEW_DOUBLES_HIGHLIGHT = ["MEX 15","RSA 8","RSA 4","KOR 17","KOR 12","KOR 13","CAN 11","QAT 14","SUI 15","SUI 2","BRA 11","BRA 18","MAR 9","HAI 10","USA 20","PAR 14","PAR 12","AUS 8","CIV 12","ECU 16","NED 17","NED 18","NED 6","NED 13","NED 3","NED 14","JPN 20","JPN 13","TUN 3","TUN 15","IRN 15","NZL 7","NZL 18","CPV 3","CPV 9","CPV 15","KSA 7","KSA 6","URU 19","URU 7","FRA 10","FRA 5","SEN 3","SEN 7","NOR 1","NOR 5","AUT 6","AUT 13","AUT 10","JOR 4","JOR 15","UZB 19","COL 2","GHA 13","PAN 11","CRO 15","FWC 15","FWC 12","FWC 17"];


export const GROUPS = {
  "⭐":{ label:"Spéciaux", color:"#f5c518", bg:"#1a1500",
    missing:{"⭐ Holographiques":[["FWC 1","Official Emblem"],["FWC 11","Suisse 1954"],["FWC 14","Mexique 1986"],["FWC 16","Corée/Japon 2002"]]},
    doubles:{"⭐ Holographiques":[["FWC 2","?"],["FWC 4","?"],["FWC 12","?"],["FWC 15","?"],["FWC 17","?"],["FWC 19","?"]]}
  },
  "A":{ label:"Groupe A", color:"#2ecc71", bg:"#0a1f0f",
    missing:{
      "🇲🇽 Mexique":[["MEX 5","César Montes"],["MEX 11","Orbelin Pineda"]],
      "🇿🇦 Afrique du Sud":[["RSA 5","Samukele Kabini"],["RSA 11","Tebogo Mokoena"],["RSA 12","Thalente Mbatha"],["RSA 17","Joe Foster"],["RSA 19","Mhau Nhota"]],
      "🇰🇷 Corée du Sud":[["KOR 2","Hyeonwoo Jo"],["KOR 7","Haecom Lee"],["KOR 10","Jaesung Lee"],["KOR 18","Heungmin Son"],["KOR 19","Keedhan Hwang"]],
      "🇨🇿 Tchéquie":[["CZE 1","?"],["CZE 2","Matej Kovar"],["CZE 5","Vladimir Coufal"],["CZE 8","David Zima"],["CZE 9","Michal Sadilek"],["CZE 14","Pavel Sulc"],["CZE 15","Matej Vydra"]]
    },
    doubles:{
      "🇲🇽 Mexique":[["MEX 2","?"],["MEX 3","?"],["MEX 4","?"],["MEX 6","?"],["MEX 16","?"],["MEX 15","?"]],
      "🇿🇦 Afrique du Sud":[["RSA 3","?"],["RSA 8","?"],["RSA 9","?"],["RSA 10","?"],["RSA 14","?"],["RSA 4","?"]],
      "🇰🇷 Corée du Sud":[["KOR 1","?"],["KOR 8","?"],["KOR 16","?"],["KOR 17","?"],["KOR 12","?"],["KOR 13","?"]],
      "🇨🇿 Tchéquie":[["CZE 10","?"],["CZE 20","?"]]
    }
  },
  "B":{ label:"Groupe B", color:"#e74c3c", bg:"#1a0a09",
    missing:{
      "🇨🇦 Canada":[["CAN 2","Davie St. Clair"],["CAN 3","Alphonso Davies"],["CAN 18","Liam Millar"]],
      "🇧🇦 Bosnie-Herzégovine":[["BIH 2","Nikola Vasilj"],["BIH 3","Amar Dedic"],["BIH 6","Arado Mujakic"],["BIH 7","Nicola Katic"],["BIH 13","?"],["BIH 16","Amar Memic"],["BIH 17","Ernezdin Demirovic"]],
      "🇶🇦 Qatar":[["QAT 2","Marshal Barshama"],["QAT 5","Homam Ahmed"],["QAT 6","Boualem Khoukhi"],["QAT 7","Pedro Miguel"],["QAT 9","Mohammed Mannai"],["QAT 10","Karim Boudiaf"],["QAT 12","Hamed Fateh"],["QAT 13","?"],["QAT 15","Aboulaziz Hatem"],["QAT 18","Akram Hassani Arif"]],
      "🇨🇭 Suisse":[["SUI 11","Remo Freuler"],["SUI 13","?"],["SUI 18","Ruben Vargas"],["SUI 20","Zeki Amdouni"]]
    },
    doubles:{
      "🇨🇦 Canada":[["CAN 5","?"],["CAN 8","?"],["CAN 9","?"],["CAN 10","?"],["CAN 13","?"],["CAN 15","?"],["CAN 11","?"]],
      "🇧🇦 Bosnie-Herzégovine":[["BIH 1","?"],["BIH 4","?"],["BIH 5","?"],["BIH 8","?"],["BIH 10","?"],["BIH 14","?"],["BIH 15","?"]],
      "🇶🇦 Qatar":[["QAT 8","?"],["QAT 11","?"],["QAT 17","?"],["QAT 14","?"]],
      "🇨🇭 Suisse":[["SUI 1","?"],["SUI 7","?"],["SUI 10","?"],["SUI 14","?"],["SUI 15","?"],["SUI 16","?"],["SUI 2","?"]],
    }
  },
  "C":{ label:"Groupe C", color:"#f39c12", bg:"#1a1200",
    missing:{
      "🇧🇷 Brésil":[["BRA 1","?"],["BRA 3","Bento"],["BRA 7","Danilo"],["BRA 15","Rodrygo"]],
      "🇲🇦 Maroc":[["MAR 5","Noussair Mazraoui"],["MAR 7","Romain Saiss"],["MAR 10","Sofian Amrabat"],["MAR 19","Brahim Diaz"],["MAR 20","Ayoub El Kaabi"]],
      "🇭🇹 Haïti":[["HAI 6","Ricardo Ade"],["HAI 8","Garuen Metusala"],["HAI 12","J-R Bellegarde"],["HAI 17","Nuba Providence"]],
      "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Écosse":[["SCO 5","Aaron Hickey"],["SCO 6","Andrew Robertson"],["SCO 13","?"],["SCO 15","Ryan Christie"],["SCO 16","Kenny McLean"],["SCO 18","Lyndon Dykes"]]
    },
    doubles:{
      "🇧🇷 Brésil":[["BRA 5","?"],["BRA 14","?"],["BRA 16","?"],["BRA 11","?"],["BRA 18","?"]],
      "🇲🇦 Maroc":[["MAR 3","?"],["MAR 12","?"],["MAR 9","?"]],
      "🇭🇹 Haïti":[["HAI 1","?"],["HAI 2","?"],["HAI 3","?"],["HAI 5","?"],["HAI 9","?"],["HAI 14","?"],["HAI 18","?"],["HAI 10","?"]],
      "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Écosse":[["SCO 1","?"],["SCO 2","?"],["SCO 19","?"]]
    }
  },
  "D":{ label:"Groupe D", color:"#3498db", bg:"#060d1a",
    missing:{
      "🇺🇸 États-Unis":[["USA 1","?"],["USA 2","Matt Freese"],["USA 7","Antinee Robinson"],["USA 16","Christian Pulisic"],["USA 18","Ricardo Pepi"]],
      "🇵🇾 Paraguay":[["PAR 1","?"],["PAR 3","Orlando Gill"],["PAR 6","Juan José Caceres"],["PAR 9","Mathias Villasanti"],["PAR 13","?"],["PAR 17","Miguel Almiron"],["PAR 19","Angel Romero"],["PAR 20","Antonio Samaria"]],
      "🇦🇺 Australie":[["AUS 5","Alessandro Circati"],["AUS 6","Jordan Bos"],["AUS 7","Aziz Behich"],["AUS 11","Juston Irvine"],["AUS 12","Riley McGree"],["AUS 18","Kusini Yengi"]],
      "🇹🇷 Türkiye":[["TUR 2","Ugurhan Cakir"],["TUR 3","Mert Muldur"],["TUR 6","Caglar Soyungu"],["TUR 16","Yunis Akgun"],["TUR 20","Ozan Yilmaz"]]
    },
    doubles:{
      "🇺🇸 États-Unis":[["USA 6","?"],["USA 8","?"],["USA 11","?"],["USA 12","?"],["USA 14","?"],["USA 19","?"],["USA 20","?"]],
      "🇵🇾 Paraguay":[["PAR 8","?"],["PAR 11","?"],["PAR 16","?"],["PAR 14","?"],["PAR 12","?"]],
      "🇦🇺 Australie":[["AUS 3","?"],["AUS 8","?"],["AUS 9","?"],["AUS 10","?"],["AUS 15","?"],["AUS 20","?"]],
      "🇹🇷 Türkiye":[["TUR 1","?"],["TUR 8","?"],["TUR 10","?"],["TUR 14","?"]]
    }
  },
  "E":{ label:"Groupe E", color:"#e67e22", bg:"#1a0e00",
    missing:{
      "🇩🇪 Allemagne":[["GER 2","Ter Stegen"],["GER 5","Schlotterbeck"],["GER 7","Waldemar Anton"],["GER 8","Ridle Baku"],["GER 11","Florian Wirtz"],["GER 14","Leon Goretzka"],["GER 15","Jamal Musiala"]],
      "🇨🇮 Côte d'Ivoire":[["CIV 2","Wima Fofana"],["CIV 6","Evan Ndicka"],["CIV 13","?"],["CIV 16","Sebastien Haller"],["CIV 18","Yon Diomande"],["CIV 19","Evan Guessand"]],
      "🇨🇼 Curaçao":[["CUW 1","?"],["CUW 2","Elov Room"],["CUW 3","A. Obispo"],["CUW 4","S. Floranus"],["CUW 9","L. Comencia"],["CUW 12","L. Bacuma"],["CUW 13","?"],["CUW 14","Tahith Chong"],["CUW 16","J. Margaritha"],["CUW 17","J. Locadia"],["CUW 20","S. Hansen"]],
      "🇪🇨 Équateur":[["ECU 5","Pervis Estupinan"],["ECU 6","Willian Pacho"],["ECU 8","Joel Ordonez"],["ECU 9","Moises Caicedo"],["ECU 11","Kobery Paez"],["ECU 12","Perro Nte"],["ECU 17","Nilson Angulo"],["ECU 19","Kevin Rodriguez"]]
    },
    doubles:{
      "🇩🇪 Allemagne":[["GER 4","?"],["GER 12","?"],["GER 16","?"]],
      "🇨🇮 Côte d'Ivoire":[["CIV 3","?"],["CIV 5","?"],["CIV 8","?"],["CIV 10","?"],["CIV 20","?"],["CIV 12","?"]],
      "🇨🇼 Curaçao":[["CUW 6","?"],["CUW 7","?"],["CUW 11","?"],["CUW 15","?"],["CUW 18","?"]],
      "🇪🇨 Équateur":[["ECU 7","?"],["ECU 13","?"],["ECU 15","?"],["ECU 16","?"]],
    }
  },
  "F":{ label:"Groupe F", color:"#9b59b6", bg:"#110a1a",
    missing:{
      "🇳🇱 Pays-Bas":[["NED 1","?"],["NED 8","Jerome Frimpong"],["NED 9","Jan Paul Van Hecke"],["NED 11","Ryan Gravenberch"],["NED 12","Teun Koopmeiners"],["NED 19","Wout Weghorst"],["NED 20","Cody Gakpo"]],
      "🇯🇵 Japon":[["JPN 2","Zion Suzuki"],["JPN 7","Tsuyoshi Watanabe"],["JPN 8","Kaishu Sano"],["JPN 12","Takefusa Kubo"]],
      "🇸🇪 Suède":[["SWE 7","G. Lagerbielke"],["SWE 8","Lucas Bergvall"],["SWE 10","J. Karlstrom"],["SWE 11","Yasin Ayari"],["SWE 12","M. Svanberg"],["SWE 16","R. Bardohji"],["SWE 17","D. Kulusevski"],["SWE 18","A. Elanga"]],
      "🇹🇳 Tunisie":[["TUN 1","?"],["TUN 4","Van Valery"],["TUN 6","V. Meriah"],["TUN 7","Ali Abdi"],["TUN 8","Dylan Bronn"],["TUN 9","Elyes Skhiri"],["TUN 12","M.A. Ben Romdhane"],["TUN 13","?"],["TUN 17","H. Mastouri"],["TUN 18","I. Gharbi"]]
    },
    doubles:{
      "🇳🇱 Pays-Bas":[["NED 2","?"],["NED 17","?"],["NED 18","?"],["NED 6","?"],["NED 13","?"],["NED 3","?"],["NED 14","?"]],
      "🇯🇵 Japon":[["JPN 1","?"],["JPN 5","?"],["JPN 13","?"],["JPN 15","?"],["JPN 20","?"]],
      "🇸🇪 Suède":[["SWE 2","?"],["SWE 3","?"],["SWE 5","?"],["SWE 9","?"],["SWE 19","?"]],
      "🇹🇳 Tunisie":[["TUN 11","?"],["TUN 14","?"],["TUN 19","?"],["TUN 3","?"],["TUN 15","?"]],
    }
  },
  "G":{ label:"Groupe G", color:"#1abc9c", bg:"#041510",
    missing:{
      "🇧🇪 Belgique":[["BEL 1","?"],["BEL 3","Arthur Theate"],["BEL 7","M. De Cuyper"],["BEL 11","Nicolas Raskin"],["BEL 15","Kevin De Bruyne"],["BEL 18","L. Trossard"]],
      "🇪🇬 Égypte":[["EGY 5","Wasser Ibrahim"],["EGY 14","M. Lasheen"],["EGY 18","M. Mohamed"],["EGY 19","Trezeguet"]],
      "🇮🇷 Iran":[["IRN 2","A. Beiranvand"],["IRN 3","M. Pouraliganji"],["IRN 4","E. Hajsafi"],["IRN 11","S. Ezatolami"]],
      "🇳🇿 Nouvelle-Zélande":[["NZL 3","Alex Paulsen"],["NZL 8","F. De Vries"],["NZL 16","Ben Old"]]
    },
    doubles:{
      "🇧🇪 Belgique":[["BEL 5","?"],["BEL 8","?"],["BEL 12","?"],["BEL 14","?"]],
      "🇪🇬 Égypte":[["EGY 1","?"],["EGY 3","?"],["EGY 4","?"],["EGY 6","?"],["EGY 9","?"],["EGY 16","?"],["EGY 20","?"]],
      "🇮🇷 Iran":[["IRN 1","?"],["IRN 5","?"],["IRN 6","?"],["IRN 8","?"],["IRN 9","?"],["IRN 10","?"],["IRN 13","?"],["IRN 17","?"],["IRN 15","?"]],
      "🇳🇿 Nouvelle-Zélande":[["NZL 1","?"],["NZL 9","?"],["NZL 10","?"],["NZL 15","?"],["NZL 19","?"],["NZL 7","?"],["NZL 18","?"]],
    }
  },
  "H":{ label:"Groupe H", color:"#c0392b", bg:"#1a0505",
    missing:{
      "🇪🇸 Espagne":[["ESP 1","?"],["ESP 2","Unai Simon"],["ESP 5","Dean Hujsen"],["ESP 6","Pedro Porro"],["ESP 12","Fabian Ruiz"],["ESP 14","Mikel Merino"],["ESP 17","Nico Williams"]],
      "🇨🇻 Cabo Verde":[["CPV 5","Diney"],["CPV 8","Joao Paulo"],["CPV 20","Bebel"]],
      "🇸🇦 Arabie Saoudite":[["KSA 3","A. Alsanbi"],["KSA 4","S. Abdulhamid"],["KSA 8","H. Altambakti"],["KSA 11","A. Alkhaibari"],["KSA 19","S. Alshehri"],["KSA 20","A. Alhamdan"]],
      "🇺🇾 Uruguay":[["URU 1","?"],["URU 2","Sergio Rochet"],["URU 3","Santiago Mele"],["URU 9","N. Nandez"],["URU 13","?"],["URU 15","N. De La Cruz"],["URU 16","Maxi Araujo"],["URU 18","F. Vinas"],["URU 20","F. Pellistri"]]
    },
    doubles:{
      "🇪🇸 Espagne":[["ESP 18","?"]],
      "🇨🇻 Cabo Verde":[["CPV 2","?"],["CPV 6","?"],["CPV 9","?"],["CPV 13","?"],["CPV 17","?"],["CPV 3","?"],["CPV 15","?"]],
      "🇸🇦 Arabie Saoudite":[["KSA 5","?"],["KSA 9","?"],["KSA 14","?"],["KSA 15","?"],["KSA 17","?"],["KSA 7","?"],["KSA 6","?"]],
      "🇺🇾 Uruguay":[["URU 4","?"],["URU 7","?"],["URU 14","?"],["URU 19","?"]]
    }
  },
  "I":{ label:"Groupe I", color:"#3498db", bg:"#020d1a",
    missing:{
      "🇫🇷 France":[["FRA 2","Mike Maignan"],["FRA 3","Theo Hernandez"],["FRA 4","William Saliba"],["FRA 6","Ibrahima Konate"],["FRA 13","?"],["FRA 14","Michael Olise"],["FRA 16","Bradley Barcola"],["FRA 19","Hugo Ekitike"]],
      "🇸🇳 Sénégal":[["SEN 1","?"],["SEN 4","M. Niakaté"],["SEN 8","K. Koulibaly"],["SEN 12","Habib Diarra"],["SEN 13","?"],["SEN 14","Lamme Camara"],["SEN 15","Sadio Mane"]],
      "🇮🇶 Irak":[["IRQ 1","?"],["IRQ 4","Hussein Ali"],["IRQ 6","M. Doski"],["IRQ 7","Zao Tahseen"],["IRQ 8","M. Younis"],["IRQ 9","Zidane Iqbal"],["IRQ 12","Ali Jasim"],["IRQ 13","?"],["IRQ 18","Ali Al-Hamadi"]],
      "🇳🇴 Norvège":[["NOR 6","M. H. Pedersen"],["NOR 9","M. Thorsby"],["NOR 13","?"],["NOR 14","Patrick Berg"],["NOR 19","Antonio Nusa"],["NOR 20","Oscar Bobb"]]
    },
    doubles:{
      "🇫🇷 France":[["FRA 7","?"],["FRA 11","?"],["FRA 10","?"],["FRA 5","?"]],
      "🇸🇳 Sénégal":[["SEN 2","?"],["SEN 3","?"],["SEN 5","?"],["SEN 9","?"],["SEN 11","?"],["SEN 19","?"],["SEN 7","?"]],
      "🇮🇶 Irak":[["IRQ 10","?"],["IRQ 15","?"],["IRQ 16","?"],["IRQ 17","?"],["IRQ 20","?"]],
      "🇳🇴 Norvège":[["NOR 5","?"],["NOR 7","?"],["NOR 8","?"],["NOR 16","?"],["NOR 18","?"],["NOR 1","?"]],
    }
  },
  "J":{ label:"Groupe J", color:"#75c2f6", bg:"#030e1a",
    missing:{
      "🇦🇷 Argentine":[["ARG 4","Cristian Romero"],["ARG 7","L. Balerdi"],["ARG 8","Enzo Fernandez"],["ARG 12","L. Paredes"],["ARG 17","?"],["ARG 18","L. Martinez"],["ARG 19","J. Alvarez"]],
      "🇩🇿 Algérie":[["ALG 1","?"],["ALG 2","A. Guendouz"],["ALG 3","R. Bensebaini"],["ALG 6","M.A. Tougai"],["ALG 8","I. Bennacer"],["ALG 16","Sao Brahima"],["ALG 17","A. Hadj Moussa"],["ALG 18","Amir Gouiri"],["ALG 20","H. Abou Ramoun"]],
      "🇦🇹 Autriche":[["AUT 1","?"],["AUT 2","A. Schlager"],["AUT 3","Patrick Pentz"],["AUT 11","M. Sabitzer"],["AUT 14","F. Grillitsch"],["AUT 15","N. Sewald"],["AUT 16","R. Schmid"],["AUT 17","P. Wimmer"],["AUT 19","M. Gregoritsch"],["AUT 20","M. Arnautovic"]],
      "🇯🇴 Jordanie":[["JOR 2","Wized Abulala"],["JOR 8","M. Abualnad"],["JOR 9","I. Saadeh"],["JOR 10","N. Al-Rashdan"],["JOR 18","Ali Olwan"]]
    },
    doubles:{
      "🇦🇷 Argentine":[["ARG 1","?"],["ARG 15","?"],["ARG 20","?"]],
      "🇩🇿 Algérie":[["ALG 7","?"],["ALG 14","?"],["ALG 19","?"]],
      "🇦🇹 Autriche":[["AUT 9","?"],["AUT 6","?"],["AUT 13","?"],["AUT 10","?"]],
      "🇯🇴 Jordanie":[["JOR 1","?"],["JOR 4","?"],["JOR 11","?"],["JOR 14","?"],["JOR 15","?"],["JOR 17","?"],["JOR 19","?"]]
    }
  },
  "K":{ label:"Groupe K", color:"#27ae60", bg:"#021208",
    missing:{
      "🇵🇹 Portugal":[["POR 2","Diogo Costa"],["POR 3","Jose Sa"],["POR 6","Diogo Dalot"],["POR 7","Nuno Mendes"],["POR 10","B. Fernandes"],["POR 11","Ruben Neves"],["POR 12","Vitinha"],["POR 13","?"],["POR 15","C. Ronaldo"]],
      "🇨🇩 Congo DR":[["COD 1","?"],["COD 3","A. Wan-Bissaka"],["COD 9","N. Mukau"],["COD 14","Neo Bongonda"],["COD 17","Brian Openda"],["COD 18","Astor Mabele"]],
      "🇺🇿 Ouzbékistan":[["UZB 3","F. Sayiev"],["UZB 5","O. Eshmurodov"],["UZB 6","H. Aliqulov"],["UZB 9","A. Khusanov"],["UZB 12","Ikromov"],["UZB 14","A. Tursunboev"]],
      "🇨🇴 Colombie":[["COL 1","?"],["COL 5","Yerry Mina"],["COL 6","Daniel Munoz"],["COL 7","Johan Mojica"],["COL 10","J. Lerma"],["COL 14","James Rodriguez"],["COL 16","J. Carrascal"],["COL 20","Luis Diaz"]]
    },
    doubles:{
      "🇵🇹 Portugal":[["POR 5","?"],["POR 18","?"]],
      "🇨🇩 Congo DR":[["COD 2","?"],["COD 6","?"],["COD 7","?"],["COD 8","?"],["COD 10","?"],["COD 11","?"],["COD 13","?"],["COD 19","?"]],
      "🇺🇿 Ouzbékistan":[["UZB 2","?"],["UZB 4","?"],["UZB 7","?"],["UZB 8","?"],["UZB 13","?"],["UZB 17","?"],["UZB 19","?"]],
      "🇨🇴 Colombie":[["COL 2","?"],["COL 13","?"],["COL 15","?"],["COL 17","?"],["COL 18","?"]]
    }
  },
  "L":{ label:"Groupe L", color:"#f1c40f", bg:"#141100",
    missing:{
      "🇬🇭 Ghana":[["GHA 4","M. Salisu"],["GHA 8","Caleb Virenki"],["GHA 10","Thomas Partey"],["GHA 11","S. Abdul Samed"],["GHA 12","K. Sulemana"],["GHA 15","Iloo Williams"]],
      "🇵🇦 Panama":[["PAN 5","A. Andrade"],["PAN 7","Eric Davis"],["PAN 10","C. Martinez"],["PAN 15","C. Harvey"],["PAN 18","C. Waterman"],["PAN 19","J.L. Rodriguez"],["PAN 20","A. Quintero"]],
      "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Angleterre":[["ENG 4","Marc Guehi"],["ENG 8","Dan Burn"],["ENG 14","Morgan Rogers"],["ENG 15","A. Gordon"],["ENG 16","Phil Foden"],["ENG 17","Bukayo Saka"]],
      "🇭🇷 Croatie":[["CRO 4","J. Gvardiol"],["CRO 6","Luka Vuskovic"],["CRO 7","Josip Sutalo"],["CRO 8","K. Jakic"],["CRO 10","M. Kovacic"],["CRO 14","Mario Pasalic"],["CRO 17","Marco Pasalic"],["CRO 19","A. Kramaric"],["CRO 20","F. Nanovic"]]
    },
    doubles:{
      "🇬🇭 Ghana":[["GHA 1","?"],["GHA 2","?"],["GHA 3","?"],["GHA 13","?"],["GHA 20","?"]],
      "🇵🇦 Panama":[["PAN 1","?"],["PAN 3","?"],["PAN 8","?"],["PAN 11","?"],["PAN 13","?"]],
      "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Angleterre":[["ENG 5","?"],["ENG 6","?"],["ENG 7","?"],["ENG 13","?"]],
      "🇭🇷 Croatie":[["CRO 1","?"],["CRO 5","?"],["CRO 11","?"],["CRO 12","?"],["CRO 18","?"],["CRO 15","?"]],
    }
  }
};
