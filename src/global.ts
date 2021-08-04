function goBack() {
  window.history.length > 2 ? this.$router.go(-1) : this.$router.push("/");
}

function goUrl(url) {
  this.$router.push(url);
}

function isMobile() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
}

function externLink(link) {
  let finalLink = "";
  let target = "_blank";

  if (isMobile()) {
    finalLink = "medics://viewer?m_source=";
    target = "_self";
  }
  finalLink += link;
  window.open(finalLink, target);
}

export { goBack, goUrl, isMobile, externLink };
