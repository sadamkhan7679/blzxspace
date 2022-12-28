import React from "react";
import tw from "twin.macro";
import { ReactComponent as EmailNewsletterIconBase } from "../images/email-newsletter-icon.svg"
import { Container as ContainerBase } from "components/misc/Layouts.js"
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton } from "components/misc/Buttons.js";
import './style.css'

const Container = tw(ContainerBase)`bg-secondary-800 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-green-500`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-gray-100 sm:text-left leading-none`
const Description = tw.p`text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-gray-200`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700`



// (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);









export default () => {


  






  return (
    <Container>
      <Content>
        <Row>
          <TextColumn>
            {/* <EmailNewsletterIcon /> */}

            <div style={{width:'70vw'}} id="mc_embed_signup">
              <form className="form-control" action="https://gmail.us20.list-manage.com/subscribe/post?u=a6ea4350e1417cafd3713fc39&amp;id=dfff6ff46d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <h2>Subscribe</h2>
                  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                    </label>
                    <input type="email"  name="EMAIL" class="required email" id="mce-EMAIL" />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input type="text"  name="FNAME" class="" id="mce-FNAME" />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input type="text"  name="LNAME" class="" id="mce-LNAME" />
                  </div>
                  <div class="mc-field-group size1of2">
                    <label for="mce-BIRTHDAY-month">Birthday </label>
                    <div class="datefield">
                      <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" /></span> /
                      <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" /></span>
                      <span class="small-meta nowrap">( mm / dd )</span>
                    </div>
                  </div>	<div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div class="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true"><input type="text" name="b_a6ea4350e1417cafd3713fc39_dfff6ff46d" tabindex="-1"  /></div>
                  <div class="clear"><input style={{backgroundColor:'black'}} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
                </div>
              </form>
            </div>


             {/* <HeadingInfoContainer>
              <Heading>Newsletter</Heading>
              <Description>Subscribe now to get our latest blog posts.</Description>
            </HeadingInfoContainer> */}
          </TextColumn>
          {/* <FormColumn>
            <Form>
              <Input name="newsletter" type="email" placeholder="Your Email Address" />
              <Button type="submit">Subscribe Now</Button>
            </Form>
          </FormColumn> */}
        </Row>
      </Content>
    </Container>
  );
};
