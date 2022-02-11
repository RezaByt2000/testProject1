import React from 'react';

// importing react hooks
import { useState } from 'react';

// icons imported from font awesome (package installed)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faAngleDown } from '@fortawesome/free-solid-svg-icons'

// importing Modal component (pops up after cliking the swap button)
import Modal from '../modal/Modal';


// component local styles
import styles from './swaper.module.css'



const Swaper = () => {
    const [number , setNumber] = useState()
    const [btcBalance , setBtcBalance] = useState(100)
    const [dogBalance , setDogBalance] = useState(0)
    const [buttonActive, setButtonActive] = useState(false)

    
    const onchangeHandler = (event) => {
        if (isNaN(event.target.value / 1 ) === true) {
            alert('YOU SHOULD ENTER A NUMBER')
        } else {
            setNumber(event.target.value);
            document.getElementById('swapButton').innerHTML= 'Swap';
            setButtonActive(true);
        }
    }

    const [showModal, setShowModal] = useState(false)
    return (

        <div>


                {showModal && <Modal setShowModal={setShowModal} setBtcBalance={setBtcBalance} setDogBalance={setDogBalance} number={number} setNumber={setNumber} btcBalance={btcBalance} dogBalance={dogBalance}/>}
            <main>
                <header>
                    <h3>Swap</h3>
                    <FontAwesomeIcon icon={faGear} />
                </header>
                <div className={styles.coinBox}>
                <input type='text' placeholder='0.0' onChange={onchangeHandler} value={number} />
                <aside>
                     <div className={styles.iconBox}>
                            <header className={styles.boxHeader}>
                            <img src={require('../../assets/btc.png')} alt='bitcoin logo' 
                            className={styles.iconImage}/>
                            <h4>BTC</h4>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </header>
                     </div>
                     <p className={styles.balance}>Balance: {btcBalance}</p>
                </aside>
                  </div>
                  <FontAwesomeIcon icon={faAngleDown} className={styles.middleIcon}/>
                  <div className={styles.coinBox}>
                <input type='text' placeholder='0.0' value={isNaN(number * 10) ? number : number * 10}/>
                <aside>
                     <div className={styles.iconBox}>
                            <header className={styles.boxHeader}>
                            <img src={require('../../assets/doge.png')} alt='bitcoin logo' 
                            className={styles.iconImage}/>
                            <h4>DOG</h4>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </header>
                     </div>
                     <p className={styles.balance}>Balance: {dogBalance}</p>
                </aside>
                  </div>
                <footer>
                    <button id='swapButton' className={buttonActive ? styles.activeButton : styles.swapButton} onClick={() => {setShowModal(true)}}>Enter an amount</button>
                </footer>
            </main>
        </div>
    );
};

export default Swaper;