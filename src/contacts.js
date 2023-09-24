const contacts = [
    {
      name: "Beyonce",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "b@beyonce.com"
    },
    {
      name: "Jack Bauer",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+987 654 321",
      email: "jack@nowhere.com"
    },
    {
      name: "Chuck Norris",
      imgURL:
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      phone: "+918 372 574",
      email: "gmail@chucknorris.com"
    },
    {
      name: "wolverine",
      imgURL:
        "data:image/jpeg;base64,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",
      phone: "+913 372 574",
      email: "gmail@hughjackman.com"
    },
    {
      name: "whitebeard",
      imgURL:
        "https://cdn.inprnt.com/thumbs/00/a0/00a03e3384414a64d61db017acefc984.jpg",
      phone: "+953 372 574",
      email: "gmail@whitebeard.com"
    },
    {
      name: "Itachi",
      imgURL:
        "https://img3.wallspic.com/crops/2/6/7/0/7/170762/170762-anime-itachi_phone_case-itachi_uchiha-sasuke_uchiha-naruto_uzumaki-2292x5120.jpg",
      phone: "+993 372 574",
      email: "gmail@itachi.com"
    }
  ];
  
  export default contacts;