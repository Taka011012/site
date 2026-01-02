const container = document.getElementById("liste");

for (let i = 1; i <= 273; i++) {
  const label = document.createElement("label");
  label.innerHTML = `<input type="checkbox"> Option ${i}`;
  container.appendChild(label);
}

const scareImages = [
"/Images/a (2).jpg",
"/Images/a (2).png",
"/Images/a (3).jpg",
"/Images/a (4).jpg",
"/Images/a (5).jpg",
"/Images/a (6).jpg",
"/Images/a (7).jpg",
"/Images/a (8).jpg",
"/Images/a (9).jpg",
"/Images/a (10).jpg",
"/Images/a (11).jpg",
"/Images/a (12).jpg",
"/Images/a (13).jpg",
"/Images/a (14).jpg",
"/Images/a (15).jpg",
"/Images/a (16).jpg",
"/Images/a (17).jpg",
"/Images/a (18).jpg",
"/Images/a (19).jpg",
"/Images/a (20).jpg",
"/Images/a (21).jpg",
"/Images/a (22).jpg",
"/Images/a (23).jpg",
"/Images/a (24).jpg",
"/Images/a (25).jpg",
"/Images/a (26).jpg",
"/Images/a (27).jpg",
"/Images/a (28).jpg",
"/Images/a (29).jpg",
"/Images/a (30).jpg",
"/Images/a (31).jpg",
"/Images/a (32).jpg",
"/Images/a (33).jpg",
"/Images/a (34).jpg",
"/Images/a (35).jpg",
"/Images/a (36).jpg",
"/Images/a (37).jpg",
"/Images/a (38).jpg",
"/Images/a (39).jpg",
"/Images/a (40).jpg",
"/Images/a (41).jpg",
"/Images/a (42).jpg",
"/Images/a (43).jpg",
"/Images/a (44).jpg",
"/Images/a (45).jpg",
"/Images/a (46).jpg",
"/Images/a (47).jpg",
"/Images/a (48).jpg",
"/Images/a (49).jpg",
"/Images/a (50).jpg",
"/Images/a (51).jpg",
"/Images/a (52).jpg",
"/Images/a (53).jpg",
"/Images/a (54).jpg",
"/Images/a (55).jpg",
"/Images/a (56).jpg",
"/Images/a (57).jpg",
"/Images/a (58).jpg",
"/Images/a (59).jpg",
"/Images/a (60).jpg",
"/Images/a (61).jpg",
"/Images/a (62).jpg",
"/Images/a (63).jpg",
"/Images/a (64).jpg",
"/Images/a (65).jpg",
"/Images/a (66).jpg",
"/Images/a (67).jpg",
"/Images/a (68).jpg",
"/Images/a (69).jpg",
"/Images/a (70).jpg",
"/Images/a (71).jpg",
"/Images/a (72).jpg",
"/Images/a (73).jpg",
"/Images/a (74).jpg",
"/Images/a (75).jpg",
"/Images/a (76).jpg",
"/Images/a (77).jpg",
"/Images/a (78).jpg",
"/Images/a (79).jpg",
"/Images/a (80).jpg",
"/Images/a (81).jpg",
"/Images/a (82).jpg",
"/Images/a (83).jpg",
"/Images/a (84).jpg",
"/Images/a (85).jpg",
"/Images/a (86).jpg",
"/Images/a (87).jpg",
"/Images/a (88).jpg",
"/Images/a (89).jpg",
"/Images/a (90).jpg",
"/Images/a (91).jpg",
"/Images/a (92).jpg",
"/Images/a (93).jpg",
"/Images/a (94).jpg",
"/Images/a (95).jpg",
"/Images/a (96).jpg",
"/Images/a (97).jpg",
"/Images/a (98).jpg",
"/Images/a (99).jpg",
"/Images/a (100).jpg",
"/Images/a (101).jpg",
"/Images/a (102).jpg",
"/Images/a (103).jpg",
"/Images/a (104).jpg",
"/Images/a (105).jpg",
"/Images/a (106).jpg",
"/Images/a (107).jpg",
"/Images/a (108).jpg",
"/Images/a (109).jpg",
"/Images/a (110).jpg",
"/Images/a (111).jpg",
"/Images/a (112).jpg",
"/Images/a (113).jpg",
"/Images/a (114).jpg",
"/Images/a (115).jpg",
"/Images/a (116).jpg",
"/Images/a (117).jpg",
"/Images/a (118).jpg",
"/Images/a (119).jpg",
"/Images/a (120).jpg",
"/Images/a (121).jpg",
"/Images/a (122).jpg",
"/Images/a (123).jpg",
"/Images/a (124).jpg",
"/Images/a (125).jpg",
"/Images/a (126).jpg",
"/Images/a (127).jpg",
"/Images/a (128).jpg",
"/Images/a (129).jpg",
"/Images/a (130).jpg",
"/Images/a (131).jpg",
"/Images/a (132).jpg",
"/Images/a (133).jpg",
"/Images/a (134).jpg",
"/Images/a (135).jpg",
"/Images/a (136).jpg",
"/Images/a (137).jpg",
"/Images/a (138).jpg",
"/Images/a (139).jpg",
"/Images/a (140).jpg",
"/Images/a (141).jpg",
"/Images/a (142).jpg",
"/Images/a (143).jpg",
"/Images/a (144).jpg",
"/Images/a (145).jpg",
"/Images/a (146).jpg",
"/Images/a (147).jpg",
"/Images/a (148).jpg",
"/Images/a (149).jpg",
"/Images/a (150).jpg",
"/Images/a (151).jpg",
"/Images/a (152).jpg",
"/Images/a (153).jpg",
"/Images/a (154).jpg",
"/Images/a (155).jpg",
"/Images/a (156).jpg",
"/Images/a (157).jpg",
"/Images/a (158).jpg",
"/Images/a (159).jpg",
"/Images/a (160).jpg",
"/Images/a (161).jpg",
"/Images/a (162).jpg",
"/Images/a (163).jpg",
"/Images/a (164).jpg",
"/Images/a (165).jpg",
"/Images/a (166).jpg",
"/Images/a (167).jpg",
"/Images/a (168).jpg",
"/Images/a (169).jpg",
"/Images/a (170).jpg",
"/Images/a (171).jpg",
"/Images/a (172).jpg",
"/Images/a (173).jpg",
"/Images/a (174).jpg",
"/Images/a (175).jpg",
"/Images/a (176).jpg",
"/Images/a (177).jpg",
"/Images/a (178).jpg",
"/Images/a (179).jpg",
"/Images/a (180).jpg",
"/Images/a (181).jpg",
"/Images/a (182).jpg",
"/Images/a (1).jpg",
"/Images/a (1).png"
];

const labels = [...document.querySelectorAll("#liste label")];
const goodIndex = Math.floor(Math.random() * labels.length);
const goodLabel = labels[goodIndex];
goodLabel.classList.add("random-selected");

const screamer = document.getElementById("screamer");
const screamerImg = document.getElementById("screamerImg");

labels.forEach(label => {
  const box = label.querySelector("input");

  box.addEventListener("change", () => {

    if (label === goodLabel && box.checked) {
      window.location.href = "Acceuil.html";
      return;
    }

    if (label !== goodLabel && box.checked) {
      const img = scareImages[Math.floor(Math.random() * scareImages.length)];
      screamerImg.src = img;

      screamer.style.display = "block";
      screamerImg.style.opacity = "1";

      setTimeout(() => {
        screamerImg.style.opacity = "0";
      }, 100);

      setTimeout(() => {
        screamer.style.display = "none";
        box.checked = false;
      }, 900);
    }
  });
});