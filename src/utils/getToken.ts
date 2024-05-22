async function getTokenNew() {
  const oldDate = localStorage.getItem("expireDate");
  const oldToken = localStorage.getItem("token");
  const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        import.meta.env.VITE_CLIENT_ID + ":" + import.meta.env.VITE_SECRET_KEY
      )}`,
    },
    method: "POST",
    body: "grant_type=client_credentials",
  });
  const data = await resp.json();
  const expireDate = getTimeOneHourLater();
  
  if (oldDate && oldToken) {
    if (oldDate <= getTimeCurrentTime()) {
      localStorage.setItem("expireDate", expireDate);
      localStorage.setItem("token", data.access_token);
    }
  } else {
    localStorage.setItem("expireDate", expireDate);
    localStorage.setItem("token", data.access_token);
  }
}
export function getTimeOneHourLater() {
  const currentTime = new Date();
  const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);
  const day = String(oneHourLater.getDate()).padStart(2, "0");
  const month = String(oneHourLater.getMonth() + 1).padStart(2, "0");
  const year = oneHourLater.getFullYear();
  const hours = String(oneHourLater.getHours()).padStart(2, "0");
  const minutes = String(oneHourLater.getMinutes()).padStart(2, "0");
  const oneHourLaterFormatted = `${day}.${month}.${year} ${hours}:${minutes}`;
  return oneHourLaterFormatted;
}

export function getTimeCurrentTime() {
  const currentTime = new Date();
  const oneHourLater = new Date(currentTime.getTime());
  const day = String(oneHourLater.getDate()).padStart(2, "0");
  const month = String(oneHourLater.getMonth() + 1).padStart(2, "0");
  const year = oneHourLater.getFullYear();
  const hours = String(oneHourLater.getHours()).padStart(2, "0");
  const minutes = String(oneHourLater.getMinutes()).padStart(2, "0");
  const oneHourLaterFormatted = `${day}.${month}.${year} ${hours}:${minutes}`;
  return oneHourLaterFormatted;
}

export function getMyToken() {
  return localStorage.getItem("token");
}

export { getTokenNew };
