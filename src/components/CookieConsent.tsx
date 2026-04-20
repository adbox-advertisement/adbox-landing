import { useEffect, useState } from "react";

const COOKIE_NAME = "adbox_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

type CookieChoice = "accepted" | "essential";

function getCookie(name: string) {
  if (typeof document === "undefined") {
    return "";
  }

  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

function saveCookieChoice(choice: CookieChoice) {
  document.cookie = `${COOKIE_NAME}=${choice}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!getCookie(COOKIE_NAME));
  }, []);

  const handleChoice = (choice: CookieChoice) => {
    saveCookieChoice(choice);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section className="cookie-banner" aria-label="Cookie notice">
      <div>
        <h2>Cookie preferences</h2>
        <p>
          Adbox uses essential cookies to keep the site working and optional
          cookies to understand which campaigns and pages people engage with.
        </p>
      </div>
      <div className="cookie-actions">
        <button type="button" onClick={() => handleChoice("essential")}>
          Essential only
        </button>
        <button type="button" onClick={() => handleChoice("accepted")}>
          Accept cookies
        </button>
      </div>
    </section>
  );
}
