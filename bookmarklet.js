javascript: (() => {
  const baseUrl = "https://untappd.com/search?q=";
  const { host } = window.location;
  let url = "";

  if (host.includes("beerrepublic")) {
    url =
      baseUrl +
      encodeURI(
        document.getElementsByClassName("product-meta__vendor")[0].innerText +
          "+" +
          document.getElementsByClassName("product-meta__title")[0].innerText
      );
  } else if (host.includes("kihoskh")) {
    url =
      baseUrl +
      encodeURI(
        document.getElementsByClassName(
          "template-product__main__info__description__title"
        )[0].innerText
      );
  } else if (host.includes("pien.fi")) {
    url =
      baseUrl +
      encodeURI(
        document.querySelector("div.summary.entry-summary > p:first-child > a")
          .innerText
      ) +
      "+" +
      document.querySelector("div.summary.entry-summary > h1").innerText;
  }

  window.open(url);
})();
