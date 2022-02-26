export const useCopy = (val: string) => {
  const iptDom = document.createElement("input");
  iptDom.value = val;
  iptDom.id = 'createDom';
  document.body.appendChild(iptDom);
  iptDom.select();
  document.execCommand("Copy");
  let createDom = document.getElementById(val);
  createDom?.parentNode?.removeChild(createDom);
}