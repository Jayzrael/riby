import React from 'react'
import './ConsentPage.css'

const ConsentPage = () => {
   return (
         <div className="consent-container">
            
         <h5>Cookie Notice</h5>
         <p>This Cookie Notice helps you to understand what cookies are, the types of cookies We use, the information that We use cookies to collect and how they are used. Generally, cookies do not collect information that can be used to identify you. However, the information we already process about you may be linked with the information collected by the cookies to identify you. </p>

     <p>Note that We do not store sensitive personal information, such as mailing addresses, account passwords, etc., in the Cookies We use.
         </p>
         <h5>Interpretation and Definitions</h5>
         <ul>
            <li>●	When this Cookie Notice (the "Notice") mentions “We,” “Us,” or “Our,” it refers to Riby Marketplace Limited (RIBY), Block G House 4, Moore Road, Yaba, Lagos.</li>
            <li>●	"Cookies" means small files that are placed on your computer, mobile device or any other device by a website, containing details of your browsing history on that Website among its many uses.</li>
            <li>●	"Website" refers to RIBY's website: <a href="https://www.riby.me/" style={{color:'blue'}}>https://www.riby.me/</a></li>
            <li>●	"You" refers to the individual accessing or using the website.</li>
         </ul>
         <h5>We use the following cookies on our website:</h5>
         <ol>
            <strong style={{paddingRight:'10px'}}>I.</strong>	<strong style={{paddingRight:'10px'}}> Analytical Cookies:</strong>Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics, the number of visitors, bounce rate, traffic source, etc.
         </ol>
         <p>The cookies we use on our website are as described below:</p>
         <table>
            <tr>
               <th>Name</th>
               <th>Domain</th>
               <th>Purpose</th>
               <th>Expiration</th>
               <th>Type</th>
            </tr>
            <tr>
               <td>_ga</td>
               <td>.riby.me</td>
               <td>The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and also keeps track of site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognize unique visitors.</td>
               <td>2 years</td>
               <td>First Party/Analytics</td>
            </tr>
            <tr>
               <td>_gat_gtag_UA_1562855</td>
               <td>.riby.me</td>
               <td>Set by Google to distinguish users.</td>
               <td>1 minute</td>
               <td>Analytics</td>
            </tr>
            <tr>
               <td>_gid</td>
               <td>riby.me</td>
               <td>Installed by Google Analytics, _gid cookie stores information on how visitors use a website, while also creating ananalytics report of the website's performance. Some of the data that are collected include the number of visitors, their source, and the pages they visit anonymously.</td>
               <td>1 day</td>
               <td>Analytics</td>
            </tr>
         </table>
         <h5>How to Manage and Delete Your Cookies</h5>
         <p>Browsers are generally set up to accept cookies automatically unless you have set your browsers to block or reject cookies by default.</p>
         <p>You can refuse to accept cookies by activating the appropriate setting on your browser. You may also withdraw your consent to activate cookies on your browser. Depending on your browser, further information may be obtained via the following links:</p>
         <ul className='browsers'>
            <li> •<a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">	Firefox</a> </li>
            <li>•<a href="https://privacy.microsoft.com/en-us/privacystatement">	Internet Explorer</a></li>
            <li>•<a href="https://support.google.com/chrome/answer/95647?hl=en">	Google Chrome</a></li>
            <li>•<a href="https://support.apple.com/en-ng/guide/safari/sfri11471/mac">	Safari</a></li>
            <li>•<a href="https://security.opera.com/">	Opera</a></li>
         </ul>
         <p>For more details on how We use, store and keep your data secure, see our <span style={{ background: 'Yellow' }}> Privacy Notice.</span></p>
         <h5>For Complaints </h5>
         <p>Should you have any complaints or inquiry about this Cookie Notice, please, reach Us at </p>
         <a href="sunday.fadipe@riby.me. " style={{color:'blue'}}>sunday.fadipe@riby.me. </a>
         <p className='lastp'>To contact the supervisory authority, the National Information Technology Development Agency (NITDA), the complaint can be sent via email at  </p>
         <a href="dpo@nitda.gov.ng" style={{color:'blue'}}>dpo@nitda.gov.ng</a>
         </div>
  )
}

export default ConsentPage