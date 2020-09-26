import React, { useCallback, useState } from 'react';

import LoginModal from '../LoginModal';

import './style.css';

export default function ButtonModal() {
  const [visible, setVisible] = useState(false);

  const visibleModal = useCallback(() => {
    setVisible(true);
  }, []);

  const invisibleModal = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <ul className="menu_list">
      <li>
        <a href="/map">Trouver un café</a>
      </li>
      <li onClick={visibleModal} type="submit">
        Se connecter
      </li>
      <LoginModal visible={visible} invisible={invisibleModal} />
    </ul>
  );
}
