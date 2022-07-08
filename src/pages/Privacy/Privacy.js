import React from 'react'
import './Privacy.css'
import Footer from "../../component/Footer";

const Privacy = () => {
   return (
      <>
         <div className="privacy-container">
            <h1>RIBY PRIVACY NOTICE</h1>
            <ol>
               <li style={{ fontWeight: "700" }}>Introduction</li>
               <p><span style={{ fontSize: "1rem", fontWeight: "800" }}>RIBY MARKETPLACE LIMITED (“RIBY”)</span> is a limited liability company incorporated under Part A of the Companies and Allied Matters Act, Cap C20, the Laws of the Federal Republic of Nigeria, with RC No. 1610109 and having its corporate office at Block G, House 4, Moore Road, Yaba, Lagos, Nigeria. RIBY is committed to safeguarding the privacy of our employees, clients, partners and visitors of our web sites and users of our products and services.
                  When this privacy notice (the "Notice") mentions “we,” “us,” or “our,” it refers to RIBY, which is the controller of your personal data. This notice governs your use of our Website: <a href="https://www.riby.me/">https://www.riby.me/</a> (“the Website) and your rights regarding our collection, use, storage protection of your data. Your privacy is important to us.
               </p>
               <li style={{ fontWeight: "700" }}>What personal information do we collect?</li>
               <p>Personal information is any information about you that may be used to directly or indirectly identify you.
                  In connection with the service we provide and the products we offer, we collect personal and financial information from you while you use our products, services and websites. Most of this collection occurs during registration (on-boarding) – for individuals or cooperatives under our different products and services – and while using our website. <br />
                  <span>These personal and financial information include:</span>
               </p>
               <ol style={{ listStyleType: "lower-alpha", marginLeft: "50px" }}>
                  <li>Your first, middle and last names</li>
                  <li>Your contact details (such as mobile/telephone numbers, e-mail addresses)</li>
                  <li>Your date of birth </li>
                  <li>Your gender</li>
                  <li>Your local government and state of origin</li>
                  <li>Next of Kin details </li>
                  <li>Your home address and telephone number (borrower/lender registration)</li>
                  <li>Your Bank Account information (including, but not limited to, Bank Verification Number (BVN), Account name and number, Credit history etc.)</li>
                  <li>ATM card details (card number, expiry date, CVV)</li>
                  <li>The domain name of the Internet service provider (ISP)</li>
                  <li>protocol address used to connect your device to the Internet The Internet </li>
                  <li>Data and time of your visits; </li>
                  <li>Web pages visited, duration and frequency of visit.</li>
                  <li>Your Login email address and password;</li>
                  <li>Web pages visited, duration and frequency of visit.</li>
                  <li>Additional personal information may be gotten from third-party applications and other identification/verification services. For example, from your financial institution or a Credit Bureau.</li>
               </ol>
               <li style={{ fontWeight: "700" }}>Principles of data processing</li>
               <span>The principles below guide our use of your personal data:</span>
               <ol style={{ listStyleType: "lower-alpha", marginLeft: "50px" }}>
                  <li>Your personal data will be processed in a lawful, fair, and transparent manner</li>
                  <li>Your personal data will be processed for a specific purpose and not in a way that is incompatible with the purpose for which it is collected;</li>
                  <li>Processing of your personal data will be adequate, relevant and limited to what is necessary for the purposes it is processed;</li>
                  <li>Your personal data will be kept accurate and, where necessary, kept up to date;</li>
                  <li>Your personal data will be held for no longer than it is required for the purposes for which it is processed;</li>
                  <li>Your personal data will be kept secure.</li>
               </ol>
               <li style={{ fontWeight: "700" }}>Cookies</li>
               <p>Cookies are tools that we use to collect information from you when you visit our Website automatically. Cookies help make our websites work and provide information to us about how users interact with our site. We use this information for the improvement of user experience on our website. The cookies we use help to provide us with anonymised, aggregated technical information. Information about their usage is specified in our <span style={{ backgroundColor: "yellow" }}>Cookie Notice</span>.</p>
               <li style={{ fontWeight: "700" }}>Why we collect your personal data and the lawful bases</li>
               <span>We collect your data to:</span>
               <table>
                  <tr>
                     <th>Purpose of processing</th>
                     <th>Lawful Bases</th>
                  </tr>
                  <tr>
                     <td>
                        <ol style={{ listStyleType: "lower-alpha" }}>
                           <li>guard against potential fraud and money laundering.</li>
                           <li>process statistical data to improve our business.</li>
                           <li>enhance data security.</li>
                           <li>identify your device when you visit our website</li>
                        </ol>
                     </td>
                     <td>Legitimate interest
                        Processing your data is necessary for our legitimate interests or the legitimate interests of a third party, provided your rights and interests do not outweigh those interests.
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <ol style={{ listStyleType: "lower-alpha" }}>
                           <li>enable us to send targeted advertisements to you.</li>
                           <li>accept cookies on your device.</li>
                           <li>subscribe to our newsletter.</li>
                        </ol>
                     </td>
                     <td>
                        <ul style={{ listStyleType: "none" }}>
                           <li>Consent</li>
                           <li>You have given explicit consent for us to process your data for a specific purpose.</li>
                        </ul>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <ul style={{ listStyleType: "lower-alpha" }}>
                           <li>create a personal profile on our website.</li>
                           <li>grant loans to individuals and cooperatives.</li>
                           <li>communicate with you.</li>
                           <li>provide our services.</li>
                           <li>notify you of any changes to our service, solving issues via live chat support, phone or email, including any bug fixing.</li>
                           <li>enable registered users to log in to our website.</li>
                        </ul>
                     </td>
                     <td>
                        <ul style={{ listStyleType: "none" }}>
                           <li>Contract</li>
                           <li>If your data processing is necessary for a contract, you have with us or because you have asked us to take specific steps before entering into that contract.</li>
                        </ul>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <ol style={{ listStyleType: "lower-alpha" }}>
                           <li>verify borrowers' and investors' identities.</li>
                           <li>establish borrowers' and investors' ability to make and request loans by verifying that they are at least 18 years of age.</li>
                           <li>determine borrowers' eligibility for loans.</li>
                           <li>carry out Know Your Customer (KYC) obligation</li>
                           <li>We may also process your data to fulfil legal requirements where needed.</li>
                        </ol>
                     </td>
                     <td>
                        <ul style={{ listStyleType: "none" }}>
                           <li>Legal obligation</li>
                           <li>If the processing of your data is necessary where there is a statutory obligation on us.</li>
                        </ul>
                     </td>
                  </tr>
               </table>
               <li style={{ fontWeight: "700" }}>Consent</li>
               <p>Whenever we process your personal data based on consent, we will give you the option to accept or reject such processing. When you give your consent.</p>
               <li style={{ fontWeight: "700" }}>Withdrawal of consent</li>
               <p> You have a right to withdraw the consent at any time and we will cease to process your personal data for the purpose we processed them. You can withdraw your personal data at any time by sending an email to <a href="mailto:info@riby.me">us</a>.</p>
               <li style={{ fontWeight: "700" }}>Your rights</li>
               <p>As a data subject, the law provides you with certain rights concerning the processing of your personal data—they include the right to: </p>
               <ol style={{ listStyleType: "lower-alpha", marginLeft: "50px" }}>
                  <li>confirm whether or not your personal data is being processed, where so, access personal data we hold about you by requesting a copy of the personal data we hold about you; </li>
                  <li>rectify and complete your personal data where you believe it to be inaccurate and incomplete, respectively; </li>
                  <li>restrict the processing of your personal data in certain circumstances; </li>
                  <li>object to the processing of your data where we intend to process such data for marketing purposes; </li>
                  <li>where feasible, receive all personal data you have provided to us—in a structured, commonly used, and machine-readable format—and transmit the information to another data controller; </li>
                  <li>request the erasure of your personal data (also known as the right to be forgotten); and</li>
                  <li>lodge a complaint with a relevant authority, where you have reason to believe that we have violated the term(s) of this privacy notice by sending an email to <a href="mailto:dpo@nitda.gov.ng">dpo@nitda.gov.ng</a>. (You may complain or seek redress from us within 30 days from the time you first detected the alleged violation.)</li>
                  <p>To exercise any of the above, send an email to us at <a href="info@riby.me">info@riby</a>.meor call us on 0809 222 2109 You may also visit our office at Block G House 4, Moore Road, Yaba, Lagos.</p>
               </ol>
               <li style={{ fontWeight: "700" }}>Who we share your personal data with</li>
               <ol style={{ listStyleType: "lower-alpha", marginLeft: "50px" }}>
                  <li>
                     RIBY infrastructure for hosting services
                  </li>
                  <li>Zoom and Slack for communications within the organisation</li>
                  <li>Mailchimp for email services</li>
                  <li>Paystack, Interswitch and Flutterwave for payment services</li>
                  <li>Google for the use of Google APIs and services on our website</li>
                  <li>Jquery to make the use of Javascript on our website easier</li>
                  <li>Cloudflare and Bootstrap for fast and reliable content delivery on our website</li>
               </ol>
               <p> <span style={{ fontWeight: "700", fontSize: "1rem" }}>Note that</span>  we may disclose your data to legal or regulatory authorities if we believe it is reasonably necessary to comply with a law, regulation, order, subpoena, audit, or to protect the safety of any person, to address fraud, security or technical issues.</p>
               <li style={{ fontWeight: "700" }}>Marketing and communications</li>
               <p>Prior to sending direct marketing communications to you, we will seek your consent. You may choose to opt out of our marketing emails by clicking on the ‘unsubscribe button at the bottom of the page. </p>
               <li style={{ fontWeight: "700" }}>Retention of your data</li>
               <p>Your personal data or any other information collected will be stored for as long as necessary to fulfil the purposes described in this notice. However, we will also retain data subject to relevant provisions of applicable laws, resolve disputes, and enforce our legal agreements and policies. We delete your data for targeted marketing purposes once you unsubscribe from our marketing communications.</p>
               <p>Please note that your data may be retained for a more extended period, notwithstanding your request to remove your data, where there is a legal requirement to do so.</p>
               <li style={{ fontWeight: "700" }}>How do we store your personal data?</li>
               <p>The personal information we collect from you through our website is stored within the RIBY Ecosystem and they are processed at our office in Nigeria and any other data processing platforms used by our identifiable third parties. RIBY is PCIDSS licensed. We protect your data using physical, technical, and administrative security measures to reduce the risks of loss, misuse, unauthorised access, disclosure and alteration. Some of the safeguards we use are firewalls and data encryption, physical access controls, information access authorisation controls, and globally trusted information security management systems. </p>
               <p>In the event of an actual or suspected data breach capable of causing harm to your rights and freedoms, we will notify you without undue delay and use our best effort to remedy the violation within one (1) month from the date we notify you.</p>
               <li style={{ fontWeight: "700" }}>International transfer of data</li>
               <p>To achieve the purposes described in this notice, we may transfer your data to countries that are not considered to have sufficient law by the National Information Technology Development Agency (NITDA). Where personal data is to be transferred to a country outside Nigeria, we shall put adequate measures to ensure data security. </p>
               <p>Our data transfers to the countries that do not offer an adequate protection level are subject to the conditions under the Nigeria Data Protection Regulation (NDPR). We will therefore only transfer Personal Data out of Nigeria on one of the following conditions:</p>
               <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
                  <li>Your consent has been obtained;</li>
                  <li>The transfer is necessary for the performance of a contract between Us and you or implementation of pre-contractual measures taken at your request;</li>
                  <li>The transfer is necessary to conclude a contract between Us and the third party in your interest;</li>
                  <li>The transfer is necessary for reason of public interest;</li>
                  <li>The transfer is for the establishment, exercise or defence of legal claims;</li>
                  <li>The transfer is essential to protect your vital interests or other persons, where the Data Subject is physically or legally incapable of giving consent.</li>
               </ul>
               <p>To obtain any relevant information regarding any transfers of your Personal Data to third countries (including the appropriate transfer mechanisms), please contact us.</p>
               <li>Anti-money laundering policies and procedures</li>
               <p>Our Anti-Money Laundering (AML) and Combating Financing of Terrorism (CFT) policies are tailored to the recommendations of the Central Bank of Nigeria. We conduct client due diligence enquiries on each new client and persons connected with them and conduct ongoing monitoring of existing clients. These enquiries are based on the Money Laundering (Prohibition) Act, 2011 (as amended) “MLPA”, and the Terrorism Prevention Act 2011 (as amended) “TPA”, although if additional information is required by CBN guidelines on same, that information will also be obtained. </p>
               <p>Where necessary for these purposes, we seek relevant information from third-party data suppliers. Where individuals have supplied personal data for this purpose, we will only use it for that purpose and will keep it only as long as the relevant AML and CFT data protection legislations require.</p>
               <p>We also have internal procedures to ensure that any suspicion of money laundering and terrorism are reported to the appropriate authorities where there is an obligation to do so. Our legal team and other relevant staffs are provided with training on these issues.</p>
               <li style={{ fontWeight: "700" }}>Contact us</li>
               <p>We are hopeful that you will not have a cause to be displeased about how we manage your data. However, in the unlikely event that you have a concern over how your information is being managed, processed or where it is missing, you can reach our Data Protection Officer (DPO) at <a href="mailto:sunday.fadipe@riby.me">sunday.fadipe@riby.me</a>. </p>
               <li style={{ fontWeight: "700" }}>Changes to the privacy notice</li>
               <p style={{ marginBottom: "80px" }}>We may change this notice from time to time by updating this page. We do not undertake to send a written notification of changes to this notice. Whenever you visit our website, do check the last date of update.</p>
            </ol>
         </div>
         <Footer />
      </>
   )
}

export default Privacy