import React from 'react'
import useScroll from '../useScroll'
import {
    FooterContainer,
    FooterWrapper, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap, 
    WebsiteRights,
    SocialIcons,
    SocialLink,
    SocialLogo
} from './FooterElements'

import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
    const {toggleIcon} = useScroll()
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Destinations</FooterLink>
                            <FooterLink to='/signin'>Sponsorship</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Video</FooterLinkTitle>
                            <FooterLink to='/signin'>Submit Video</FooterLink>
                            <FooterLink to='/signin'>Ambassadors</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                            <FooterLink to='/signin'>Influncer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleIcon}>dolla</SocialLogo>
                        <WebsiteRights>dolla ® {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialLink href='//www.facebook.com' target='_blank' arial-label='Facebook'>
                                <FaFacebook />
                            </SocialLink>
                            <SocialLink href='//instagram.com' target='_blank' arial-label='Instagram'>
                                <FaInstagram />
                            </SocialLink>
                            <SocialLink href='//www.twitter.com' target='_blank' arial-label='Twitter'>
                                <FaTwitter />
                            </SocialLink>
                            <SocialLink href='//www.youtube.com' target='_blank' arial-label='Youtube'>
                                <FaYoutube />
                            </SocialLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>       
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer