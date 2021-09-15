export default function addExternalScript(url) {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}
