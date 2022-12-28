import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../images/logo-light.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-900 text-gray-100  -mb-8 px-8`;
const Content = tw.div`pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
              <LogoText> Bizxspace </LogoText>
            <SocialLinksContainer>
              <SocialLink href="https://twitter.com/bizxspace">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://www.youtube.com/channel/UCnOaw_1lVWic-ztKXgMT_0Q">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/home">Home</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/search">Search</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/about">About</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/signup">Signup</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://www.termsfeed.com/live/db898b50-aff7-4d64-a534-82a366ccfb37">Privacy Policy</Link>
              </LinkListItem>
            </LinkList>
          </Column>


        </FiveColumns>
        <Divider/>
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright 2020, Bizxspace Inc.</CopyrightNotice>
          <CompanyInfo>An Internet Company.</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
