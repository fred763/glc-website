// app/blog/[id]/shareBlog.jsx
"use client";

import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

// Create wrapper components to handle the networkName prop
const CustomLinkedinButton = ({ children, ...props }) => (
  <LinkedinShareButton {...props}>{children}</LinkedinShareButton>
);

const CustomTwitterButton = ({ children, ...props }) => (
  <TwitterShareButton {...props}>{children}</TwitterShareButton>
);

const CustomWhatsappButton = ({ children, ...props }) => (
  <WhatsappShareButton {...props}>{children}</WhatsappShareButton>
);

export default function ShareBlog({ url, iconSize }) {
  const baseUrl = "https://www.mycliniccopilot.com/blog/";
  const shareUrl = baseUrl + url;

  return (
    <div className="space-x-4 mt-4">
      <CustomLinkedinButton url={shareUrl}>
        <LinkedinIcon size={iconSize} round />
      </CustomLinkedinButton>
      
      <CustomTwitterButton url={shareUrl}>
        <TwitterIcon size={iconSize} round />
      </CustomTwitterButton>
      
      <CustomWhatsappButton url={shareUrl}>
        <WhatsappIcon size={iconSize} round />
      </CustomWhatsappButton>
    </div>
  );
}