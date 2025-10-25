import { useState, useEffect } from 'react';

const MODAL_COOLDOWN_KEY = 'bonniepet_modal_cooldown';
const COOLDOWN_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const useModalCooldown = () => {
  const [canShowModal, setCanShowModal] = useState(true);

  useEffect(() => {
    const checkCooldown = () => {
      const lastShown = localStorage.getItem(MODAL_COOLDOWN_KEY);
      
      if (lastShown) {
        const lastShownTime = parseInt(lastShown, 10);
        const now = Date.now();
        const timePassed = now - lastShownTime;

        if (timePassed < COOLDOWN_DURATION) {
          console.log(`Modal cooldown active. ${Math.round((COOLDOWN_DURATION - timePassed) / 1000 / 60)} minutes remaining`);
          setCanShowModal(false);
        } else {
          console.log('Modal cooldown expired. Can show again.');
          setCanShowModal(true);
        }
      } else {
        console.log('No previous modal shown. Can show.');
        setCanShowModal(true);
      }
    };

    checkCooldown();
  }, []);

  const setModalShown = () => {
    const now = Date.now();
    localStorage.setItem(MODAL_COOLDOWN_KEY, now.toString());
    console.log('Modal shown. 24-hour cooldown started.');
    setCanShowModal(false);
  };

  const resetCooldown = () => {
    localStorage.removeItem(MODAL_COOLDOWN_KEY);
    console.log('Modal cooldown reset.');
    setCanShowModal(true);
  };

  return { canShowModal, setModalShown, resetCooldown };
};