function __collectiveImport(srcs, relativeURI) {
  for (i = 0;i < srcs.length;i++)
    __insertScript(srcs[i], relativeURI);
}

function __insertScript(src, relativeURI) {
  if (relativeURI) {
    src = relativeURI + src;
  }
  var scriptTag = document.createElement("script");
  scriptTag.src = src;
  document.head.appendChild(scriptTag);
}
