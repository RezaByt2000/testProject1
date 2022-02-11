import React from 'react';


// icons imported from font awesome package (using npm)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

// local styles
import styles from './Modal.module.css'



const Modal = ({setShowModal,setDogBalance,setBtcBalance, number, setNumber, btcBalance, dogBalance}
    ) => {
    const swapConfirmation = () => {
        setBtcBalance(btcBalance - number)
        setDogBalance(dogBalance + parseFloat(number * 10))
        setShowModal(false)
        setNumber(0)
    }
    return (
        <div className={styles.modalBody}>
          <div>
                <header>
                    <h3>Swap Confirm</h3>
                    <button onClick={() => setShowModal(false)}>x</button>
                </header>
              <div className='modalMain'>
                <div className={styles.coinBox}>
                    <input type='text' placeholder='0.0' value={number}/>
                    <aside>
                        <div className={styles.iconBox}>
                                <header className={styles.boxHeader}>
                                <img src={require('../../assets/btc.png')} alt='bitcoin logo' 
                                className={styles.iconImage}/>
                                <h2>BTC</h2>
                            </header>
                        </div>
                    </aside>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} className={styles.middleIcon}/>
                    <div className={styles.coinBox}>
                    <input type='text' placeholder='0.0' value={number * 10}/>
                    <aside>
                        <div className={styles.iconBox}>
                                <header className={styles.boxHeader}>
                                <img src={require('../../assets/doge.png')} alt='bitcoin logo' 
                                className={styles.iconImage}/>
                                <h2>DOG</h2>
                            </header>
                        </div>
                    </aside>
                    </div>
              </div>
              <div className={styles.footerText}>
                  <p>1 BTC = 10 DOGE</p>
              </div>
              <div>
                  <button className={styles.confirmButton} onClick={swapConfirmation}>Swap Confirm</button>
              </div>
          </div>
            
        </div>
    );
};

export default Modal;