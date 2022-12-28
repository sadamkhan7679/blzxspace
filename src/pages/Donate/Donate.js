import React from 'react'
import HeaderTwo from 'components/HeaderTwo/HeaderTwo'
import './donate.css'
function Donate() {
    return (
        <div>
            <HeaderTwo />
            {/* 
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="T9QQN598L8Z6Y" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form> */}


            <div style={{marginLeft:'40%'}}>
                <div class="box">
                    {/* <img src="https://image.flaticon.com/icons/svg/138/138292.svg" alt="coins" /> */}
                    <h2>Donate</h2>
                    <p>Support your favorite creator. <br />Donate below.</p>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="T9QQN598L8Z6Y" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                    {/* <a href="https://patreon.com/florinpop17" target="_blank" class="btn patreon">
                    <i class="fab fa-patreon"></i> Patreon
                </a> */}
                </div>

            </div>


        </div>
    )
}

export default Donate
