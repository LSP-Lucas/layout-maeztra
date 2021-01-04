window.addEventListener('load', () => {
  groupOrganizationForPhoto();
});

function groupOrganizationForPhoto() {
  const groupFriends = 5;

  const possibleCombinations = (groupFriends) => {
    return groupFriends *= groupFriends - 1;
  }

  if (groupFriends > 1) {
    console.log(possibleCombinations(groupFriends));
  } else {
    console.log("O grupo de amigos precisa ter no mínimo 2 pessoas");
  }
}
