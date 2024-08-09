import React, { useState } from "react";
import "../css/Header.css";
import "../css/style.css";
import logo from "../assets/logo.svg";
import likeIcon from "../assets/likeIcon.svg";
import search from "../assets/searchingIcon.svg";
import userIcon from "../assets/userIcon.svg";
import vueIcon from "../assets/vueIcon.svg";
import subIcon from "../assets/element-4.png";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };
  return (
    <>
      <div className="subheader">
        <h6 className="lorem">
          <img src={subIcon} />
          <svg
            width="112"
            height="12"
            viewBox="0 0 112 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.96 9V0.599999H1.884V8.088H5.736V9H0.96ZM11.598 6.708V5.052C11.598 4.02 10.878 3.504 10.074 3.504C9.26997 3.504 8.54997 4.02 8.54997 5.052V6.708C8.54997 7.74 9.26997 8.256 10.074 8.256C10.878 8.256 11.598 7.74 11.598 6.708ZM12.498 5.064V6.696C12.498 8.52 11.226 9.12 10.074 9.12C8.92197 9.12 7.64997 8.52 7.64997 6.696V5.064C7.64997 3.24 8.92197 2.64 10.074 2.64C11.226 2.64 12.498 3.24 12.498 5.064ZM16.0344 2.808V3.456C16.3464 2.952 16.9944 2.7 17.5584 2.7H17.9544V3.564H17.5584C16.7544 3.564 16.0344 4.08 16.0344 5.112V9H15.1344V2.808H16.0344ZM22.2927 8.256C23.0007 8.256 23.6367 7.86 23.7807 7.056H24.7047C24.5487 8.604 23.3727 9.12 22.2927 9.12C21.1407 9.12 19.8687 8.52 19.8687 6.696V5.064C19.8687 3.24 21.1407 2.64 22.2927 2.64C23.4447 2.64 24.7167 3.24 24.7167 5.064V6.108H20.7687V6.708C20.7687 7.74 21.4887 8.256 22.2927 8.256ZM23.8167 5.28V5.052C23.8167 4.02 23.0967 3.504 22.2927 3.504C21.4887 3.504 20.7687 4.02 20.7687 5.052V5.28H23.8167ZM35.7305 9H34.8305V4.98C34.8305 4.056 34.1105 3.504 33.4025 3.504C32.6705 3.504 31.9625 4.056 31.9625 5.052V9H31.0625V4.98C31.0625 4.056 30.3425 3.504 29.6345 3.504C28.9025 3.504 28.1945 4.056 28.1945 5.052V9H27.2945V2.808H28.1945V3.396C28.4945 2.892 29.1785 2.64 29.6345 2.64C30.3305 2.64 31.0865 2.928 31.5065 3.612C31.9265 2.928 32.6945 2.64 33.3905 2.64C34.5065 2.64 35.7305 3.312 35.7305 5.064V9ZM43.0383 0.599999V1.764H42.1383V0.599999H43.0383ZM43.0383 2.808V9H42.1383V2.808H43.0383ZM48.2576 9.12C47.6936 9.12 47.0456 8.868 46.7336 8.364V11.208H45.8336V2.808H46.7336V3.396C47.0456 2.892 47.6936 2.64 48.2576 2.64C49.4096 2.64 50.6816 3.24 50.6816 5.064V6.696C50.6816 8.52 49.4096 9.12 48.2576 9.12ZM49.7816 6.708V5.052C49.7816 4.02 49.0616 3.504 48.2576 3.504C47.4536 3.504 46.7336 4.02 46.7336 5.052V6.708C46.7336 7.74 47.4536 8.256 48.2576 8.256C49.0616 8.256 49.7816 7.74 49.7816 6.708ZM57.3941 4.62H56.4701C56.3621 3.9 55.8821 3.504 55.1141 3.504C54.4421 3.504 53.9501 3.84 53.9501 4.404C53.9501 4.92 54.2981 5.148 54.8021 5.268L55.9661 5.556C56.9021 5.784 57.5501 6.252 57.5501 7.392C57.5501 8.616 56.6261 9.12 55.3661 9.12C54.0701 9.12 52.9781 8.52 52.8821 7.02H53.8061C53.8901 7.896 54.5381 8.256 55.3661 8.256C56.2301 8.256 56.6261 7.908 56.6381 7.368C56.6381 6.972 56.4581 6.624 55.7741 6.456L54.5621 6.156C53.8901 6 53.0381 5.544 53.0381 4.44C53.0381 3.3 53.9861 2.64 55.1261 2.64C56.3741 2.64 57.2981 3.24 57.3941 4.62ZM62.2665 9.12C61.2465 9.12 59.8785 8.568 59.8785 6.732V2.808H60.7785V6.672C60.7785 7.776 61.5345 8.256 62.2665 8.256C63.0225 8.256 63.7545 7.728 63.7545 6.708V2.808H64.6545V9H63.7545V8.364C63.4425 8.856 62.7945 9.12 62.2665 9.12ZM75.8907 9H74.9907V4.98C74.9907 4.056 74.2707 3.504 73.5627 3.504C72.8307 3.504 72.1227 4.056 72.1227 5.052V9H71.2227V4.98C71.2227 4.056 70.5027 3.504 69.7947 3.504C69.0627 3.504 68.3547 4.056 68.3547 5.052V9H67.4547V2.808H68.3547V3.396C68.6547 2.892 69.3387 2.64 69.7947 2.64C70.4907 2.64 71.2467 2.928 71.6667 3.612C72.0867 2.928 72.8547 2.64 73.5507 2.64C74.6667 2.64 75.8907 3.312 75.8907 5.064V9ZM84.5544 9.12C83.4024 9.12 82.1304 8.52 82.1304 6.696V5.064C82.1304 3.24 83.4024 2.64 84.5544 2.64C85.1184 2.64 85.7664 2.892 86.0784 3.396V0.599999H86.9784V9H86.0784V8.364C85.7664 8.868 85.1184 9.12 84.5544 9.12ZM83.0304 5.052V6.708C83.0304 7.74 83.7504 8.256 84.5544 8.256C85.3584 8.256 86.0784 7.74 86.0784 6.708V5.052C86.0784 4.02 85.3584 3.504 84.5544 3.504C83.7504 3.504 83.0304 4.02 83.0304 5.052ZM93.5589 6.708V5.052C93.5589 4.02 92.8389 3.504 92.0349 3.504C91.2309 3.504 90.5109 4.02 90.5109 5.052V6.708C90.5109 7.74 91.2309 8.256 92.0349 8.256C92.8389 8.256 93.5589 7.74 93.5589 6.708ZM94.4589 5.064V6.696C94.4589 8.52 93.1869 9.12 92.0349 9.12C90.8829 9.12 89.6109 8.52 89.6109 6.696V5.064C89.6109 3.24 90.8829 2.64 92.0349 2.64C93.1869 2.64 94.4589 3.24 94.4589 5.064ZM97.9713 0.599999V7.596C97.9713 7.992 98.1153 8.136 98.5473 8.136H98.7393V9H98.5473C97.3953 9 97.0713 8.58 97.0713 7.524V0.599999H97.9713ZM104.922 6.708V5.052C104.922 4.02 104.202 3.504 103.398 3.504C102.594 3.504 101.874 4.02 101.874 5.052V6.708C101.874 7.74 102.594 8.256 103.398 8.256C104.202 8.256 104.922 7.74 104.922 6.708ZM105.822 5.064V6.696C105.822 8.52 104.55 9.12 103.398 9.12C102.246 9.12 100.974 8.52 100.974 6.696V5.064C100.974 3.24 102.246 2.64 103.398 2.64C104.55 2.64 105.822 3.24 105.822 5.064ZM109.359 2.808V3.456C109.671 2.952 110.319 2.7 110.883 2.7H111.279V3.564H110.883C110.079 3.564 109.359 4.08 109.359 5.112V9H108.459V2.808H109.359Z"
              fill="#EB4C6B"
            />
          </svg>
        </h6>
        <h6 className="subHeaderIcons">
          <img src={subIcon} />
          <svg
            width="112"
            height="12"
            viewBox="0 0 112 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.96 9V0.599999H1.884V8.088H5.736V9H0.96ZM11.598 6.708V5.052C11.598 4.02 10.878 3.504 10.074 3.504C9.26997 3.504 8.54997 4.02 8.54997 5.052V6.708C8.54997 7.74 9.26997 8.256 10.074 8.256C10.878 8.256 11.598 7.74 11.598 6.708ZM12.498 5.064V6.696C12.498 8.52 11.226 9.12 10.074 9.12C8.92197 9.12 7.64997 8.52 7.64997 6.696V5.064C7.64997 3.24 8.92197 2.64 10.074 2.64C11.226 2.64 12.498 3.24 12.498 5.064ZM16.0344 2.808V3.456C16.3464 2.952 16.9944 2.7 17.5584 2.7H17.9544V3.564H17.5584C16.7544 3.564 16.0344 4.08 16.0344 5.112V9H15.1344V2.808H16.0344ZM22.2927 8.256C23.0007 8.256 23.6367 7.86 23.7807 7.056H24.7047C24.5487 8.604 23.3727 9.12 22.2927 9.12C21.1407 9.12 19.8687 8.52 19.8687 6.696V5.064C19.8687 3.24 21.1407 2.64 22.2927 2.64C23.4447 2.64 24.7167 3.24 24.7167 5.064V6.108H20.7687V6.708C20.7687 7.74 21.4887 8.256 22.2927 8.256ZM23.8167 5.28V5.052C23.8167 4.02 23.0967 3.504 22.2927 3.504C21.4887 3.504 20.7687 4.02 20.7687 5.052V5.28H23.8167ZM35.7305 9H34.8305V4.98C34.8305 4.056 34.1105 3.504 33.4025 3.504C32.6705 3.504 31.9625 4.056 31.9625 5.052V9H31.0625V4.98C31.0625 4.056 30.3425 3.504 29.6345 3.504C28.9025 3.504 28.1945 4.056 28.1945 5.052V9H27.2945V2.808H28.1945V3.396C28.4945 2.892 29.1785 2.64 29.6345 2.64C30.3305 2.64 31.0865 2.928 31.5065 3.612C31.9265 2.928 32.6945 2.64 33.3905 2.64C34.5065 2.64 35.7305 3.312 35.7305 5.064V9ZM43.0383 0.599999V1.764H42.1383V0.599999H43.0383ZM43.0383 2.808V9H42.1383V2.808H43.0383ZM48.2576 9.12C47.6936 9.12 47.0456 8.868 46.7336 8.364V11.208H45.8336V2.808H46.7336V3.396C47.0456 2.892 47.6936 2.64 48.2576 2.64C49.4096 2.64 50.6816 3.24 50.6816 5.064V6.696C50.6816 8.52 49.4096 9.12 48.2576 9.12ZM49.7816 6.708V5.052C49.7816 4.02 49.0616 3.504 48.2576 3.504C47.4536 3.504 46.7336 4.02 46.7336 5.052V6.708C46.7336 7.74 47.4536 8.256 48.2576 8.256C49.0616 8.256 49.7816 7.74 49.7816 6.708ZM57.3941 4.62H56.4701C56.3621 3.9 55.8821 3.504 55.1141 3.504C54.4421 3.504 53.9501 3.84 53.9501 4.404C53.9501 4.92 54.2981 5.148 54.8021 5.268L55.9661 5.556C56.9021 5.784 57.5501 6.252 57.5501 7.392C57.5501 8.616 56.6261 9.12 55.3661 9.12C54.0701 9.12 52.9781 8.52 52.8821 7.02H53.8061C53.8901 7.896 54.5381 8.256 55.3661 8.256C56.2301 8.256 56.6261 7.908 56.6381 7.368C56.6381 6.972 56.4581 6.624 55.7741 6.456L54.5621 6.156C53.8901 6 53.0381 5.544 53.0381 4.44C53.0381 3.3 53.9861 2.64 55.1261 2.64C56.3741 2.64 57.2981 3.24 57.3941 4.62ZM62.2665 9.12C61.2465 9.12 59.8785 8.568 59.8785 6.732V2.808H60.7785V6.672C60.7785 7.776 61.5345 8.256 62.2665 8.256C63.0225 8.256 63.7545 7.728 63.7545 6.708V2.808H64.6545V9H63.7545V8.364C63.4425 8.856 62.7945 9.12 62.2665 9.12ZM75.8907 9H74.9907V4.98C74.9907 4.056 74.2707 3.504 73.5627 3.504C72.8307 3.504 72.1227 4.056 72.1227 5.052V9H71.2227V4.98C71.2227 4.056 70.5027 3.504 69.7947 3.504C69.0627 3.504 68.3547 4.056 68.3547 5.052V9H67.4547V2.808H68.3547V3.396C68.6547 2.892 69.3387 2.64 69.7947 2.64C70.4907 2.64 71.2467 2.928 71.6667 3.612C72.0867 2.928 72.8547 2.64 73.5507 2.64C74.6667 2.64 75.8907 3.312 75.8907 5.064V9ZM84.5544 9.12C83.4024 9.12 82.1304 8.52 82.1304 6.696V5.064C82.1304 3.24 83.4024 2.64 84.5544 2.64C85.1184 2.64 85.7664 2.892 86.0784 3.396V0.599999H86.9784V9H86.0784V8.364C85.7664 8.868 85.1184 9.12 84.5544 9.12ZM83.0304 5.052V6.708C83.0304 7.74 83.7504 8.256 84.5544 8.256C85.3584 8.256 86.0784 7.74 86.0784 6.708V5.052C86.0784 4.02 85.3584 3.504 84.5544 3.504C83.7504 3.504 83.0304 4.02 83.0304 5.052ZM93.5589 6.708V5.052C93.5589 4.02 92.8389 3.504 92.0349 3.504C91.2309 3.504 90.5109 4.02 90.5109 5.052V6.708C90.5109 7.74 91.2309 8.256 92.0349 8.256C92.8389 8.256 93.5589 7.74 93.5589 6.708ZM94.4589 5.064V6.696C94.4589 8.52 93.1869 9.12 92.0349 9.12C90.8829 9.12 89.6109 8.52 89.6109 6.696V5.064C89.6109 3.24 90.8829 2.64 92.0349 2.64C93.1869 2.64 94.4589 3.24 94.4589 5.064ZM97.9713 0.599999V7.596C97.9713 7.992 98.1153 8.136 98.5473 8.136H98.7393V9H98.5473C97.3953 9 97.0713 8.58 97.0713 7.524V0.599999H97.9713ZM104.922 6.708V5.052C104.922 4.02 104.202 3.504 103.398 3.504C102.594 3.504 101.874 4.02 101.874 5.052V6.708C101.874 7.74 102.594 8.256 103.398 8.256C104.202 8.256 104.922 7.74 104.922 6.708ZM105.822 5.064V6.696C105.822 8.52 104.55 9.12 103.398 9.12C102.246 9.12 100.974 8.52 100.974 6.696V5.064C100.974 3.24 102.246 2.64 103.398 2.64C104.55 2.64 105.822 3.24 105.822 5.064ZM109.359 2.808V3.456C109.671 2.952 110.319 2.7 110.883 2.7H111.279V3.564H110.883C110.079 3.564 109.359 4.08 109.359 5.112V9H108.459V2.808H109.359Z"
              fill="#EB4C6B"
            />
          </svg>
        </h6>
        <h6 className="lorem">
          <img src={subIcon} />
          <svg
            width="112"
            height="12"
            viewBox="0 0 112 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.96 9V0.599999H1.884V8.088H5.736V9H0.96ZM11.598 6.708V5.052C11.598 4.02 10.878 3.504 10.074 3.504C9.26997 3.504 8.54997 4.02 8.54997 5.052V6.708C8.54997 7.74 9.26997 8.256 10.074 8.256C10.878 8.256 11.598 7.74 11.598 6.708ZM12.498 5.064V6.696C12.498 8.52 11.226 9.12 10.074 9.12C8.92197 9.12 7.64997 8.52 7.64997 6.696V5.064C7.64997 3.24 8.92197 2.64 10.074 2.64C11.226 2.64 12.498 3.24 12.498 5.064ZM16.0344 2.808V3.456C16.3464 2.952 16.9944 2.7 17.5584 2.7H17.9544V3.564H17.5584C16.7544 3.564 16.0344 4.08 16.0344 5.112V9H15.1344V2.808H16.0344ZM22.2927 8.256C23.0007 8.256 23.6367 7.86 23.7807 7.056H24.7047C24.5487 8.604 23.3727 9.12 22.2927 9.12C21.1407 9.12 19.8687 8.52 19.8687 6.696V5.064C19.8687 3.24 21.1407 2.64 22.2927 2.64C23.4447 2.64 24.7167 3.24 24.7167 5.064V6.108H20.7687V6.708C20.7687 7.74 21.4887 8.256 22.2927 8.256ZM23.8167 5.28V5.052C23.8167 4.02 23.0967 3.504 22.2927 3.504C21.4887 3.504 20.7687 4.02 20.7687 5.052V5.28H23.8167ZM35.7305 9H34.8305V4.98C34.8305 4.056 34.1105 3.504 33.4025 3.504C32.6705 3.504 31.9625 4.056 31.9625 5.052V9H31.0625V4.98C31.0625 4.056 30.3425 3.504 29.6345 3.504C28.9025 3.504 28.1945 4.056 28.1945 5.052V9H27.2945V2.808H28.1945V3.396C28.4945 2.892 29.1785 2.64 29.6345 2.64C30.3305 2.64 31.0865 2.928 31.5065 3.612C31.9265 2.928 32.6945 2.64 33.3905 2.64C34.5065 2.64 35.7305 3.312 35.7305 5.064V9ZM43.0383 0.599999V1.764H42.1383V0.599999H43.0383ZM43.0383 2.808V9H42.1383V2.808H43.0383ZM48.2576 9.12C47.6936 9.12 47.0456 8.868 46.7336 8.364V11.208H45.8336V2.808H46.7336V3.396C47.0456 2.892 47.6936 2.64 48.2576 2.64C49.4096 2.64 50.6816 3.24 50.6816 5.064V6.696C50.6816 8.52 49.4096 9.12 48.2576 9.12ZM49.7816 6.708V5.052C49.7816 4.02 49.0616 3.504 48.2576 3.504C47.4536 3.504 46.7336 4.02 46.7336 5.052V6.708C46.7336 7.74 47.4536 8.256 48.2576 8.256C49.0616 8.256 49.7816 7.74 49.7816 6.708ZM57.3941 4.62H56.4701C56.3621 3.9 55.8821 3.504 55.1141 3.504C54.4421 3.504 53.9501 3.84 53.9501 4.404C53.9501 4.92 54.2981 5.148 54.8021 5.268L55.9661 5.556C56.9021 5.784 57.5501 6.252 57.5501 7.392C57.5501 8.616 56.6261 9.12 55.3661 9.12C54.0701 9.12 52.9781 8.52 52.8821 7.02H53.8061C53.8901 7.896 54.5381 8.256 55.3661 8.256C56.2301 8.256 56.6261 7.908 56.6381 7.368C56.6381 6.972 56.4581 6.624 55.7741 6.456L54.5621 6.156C53.8901 6 53.0381 5.544 53.0381 4.44C53.0381 3.3 53.9861 2.64 55.1261 2.64C56.3741 2.64 57.2981 3.24 57.3941 4.62ZM62.2665 9.12C61.2465 9.12 59.8785 8.568 59.8785 6.732V2.808H60.7785V6.672C60.7785 7.776 61.5345 8.256 62.2665 8.256C63.0225 8.256 63.7545 7.728 63.7545 6.708V2.808H64.6545V9H63.7545V8.364C63.4425 8.856 62.7945 9.12 62.2665 9.12ZM75.8907 9H74.9907V4.98C74.9907 4.056 74.2707 3.504 73.5627 3.504C72.8307 3.504 72.1227 4.056 72.1227 5.052V9H71.2227V4.98C71.2227 4.056 70.5027 3.504 69.7947 3.504C69.0627 3.504 68.3547 4.056 68.3547 5.052V9H67.4547V2.808H68.3547V3.396C68.6547 2.892 69.3387 2.64 69.7947 2.64C70.4907 2.64 71.2467 2.928 71.6667 3.612C72.0867 2.928 72.8547 2.64 73.5507 2.64C74.6667 2.64 75.8907 3.312 75.8907 5.064V9ZM84.5544 9.12C83.4024 9.12 82.1304 8.52 82.1304 6.696V5.064C82.1304 3.24 83.4024 2.64 84.5544 2.64C85.1184 2.64 85.7664 2.892 86.0784 3.396V0.599999H86.9784V9H86.0784V8.364C85.7664 8.868 85.1184 9.12 84.5544 9.12ZM83.0304 5.052V6.708C83.0304 7.74 83.7504 8.256 84.5544 8.256C85.3584 8.256 86.0784 7.74 86.0784 6.708V5.052C86.0784 4.02 85.3584 3.504 84.5544 3.504C83.7504 3.504 83.0304 4.02 83.0304 5.052ZM93.5589 6.708V5.052C93.5589 4.02 92.8389 3.504 92.0349 3.504C91.2309 3.504 90.5109 4.02 90.5109 5.052V6.708C90.5109 7.74 91.2309 8.256 92.0349 8.256C92.8389 8.256 93.5589 7.74 93.5589 6.708ZM94.4589 5.064V6.696C94.4589 8.52 93.1869 9.12 92.0349 9.12C90.8829 9.12 89.6109 8.52 89.6109 6.696V5.064C89.6109 3.24 90.8829 2.64 92.0349 2.64C93.1869 2.64 94.4589 3.24 94.4589 5.064ZM97.9713 0.599999V7.596C97.9713 7.992 98.1153 8.136 98.5473 8.136H98.7393V9H98.5473C97.3953 9 97.0713 8.58 97.0713 7.524V0.599999H97.9713ZM104.922 6.708V5.052C104.922 4.02 104.202 3.504 103.398 3.504C102.594 3.504 101.874 4.02 101.874 5.052V6.708C101.874 7.74 102.594 8.256 103.398 8.256C104.202 8.256 104.922 7.74 104.922 6.708ZM105.822 5.064V6.696C105.822 8.52 104.55 9.12 103.398 9.12C102.246 9.12 100.974 8.52 100.974 6.696V5.064C100.974 3.24 102.246 2.64 103.398 2.64C104.55 2.64 105.822 3.24 105.822 5.064ZM109.359 2.808V3.456C109.671 2.952 110.319 2.7 110.883 2.7H111.279V3.564H110.883C110.079 3.564 109.359 4.08 109.359 5.112V9H108.459V2.808H109.359Z"
              fill="#EB4C6B"
            />
          </svg>
        </h6>
      </div>
      <div className="topHeader">
        <header>
          <div className="top-bar">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <div className="right-icons">
              <a href="#" className="icon search">
                {" "}
                <img src={search} />
              </a>
              <a href="#" className="icon heart">
                {" "}
                <img src={likeIcon} />
              </a>
              <a href="#" className="icon cart">
                {" "}
                <img src={vueIcon} />
              </a>
              <a href="#" className="icon user">
                {" "}
                <img src={userIcon} />
              </a>
              <div className="language-selector">
                <select>
                  <option>
                    <span>ENG</span>
                  </option>
                  <option>
                    <span>Hindi</span>
                  </option>
                </select>
              </div>
            </div>
          </div>
          <nav>
            <ul>
              <li className="active">
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">SKILLS</a>
              </li>
              <li>
                <a href="#">STORIES</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <header className="mobile-header">
        <div className="custom-container">
          <div className="custom-row">
            <div className="right-icons">
              <button className="menu-toggle" onClick={toggleMobileMenu}>
                <span className="menu-icon">&#9776;</span> Menu
              </button>
            </div>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="icons">
              <a href="#" className="icon search">
                {" "}
                <img src={search} />
              </a>
              <a href="#" className="icon heart">
                {" "}
                <img src={likeIcon} />
              </a>
              <a href="#" className="icon cart">
                {" "}
                <img src={vueIcon} />
              </a>
            </div>
          </div>
        </div>
      </header>
      {!isMobileMenuOpen ? (
        <nav>
          <ul>
            <li className="active">
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}

      <div className="home-shop">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">
              <a href="#">shop</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="discoverProducts">
        <div class="container">
          <div class=" discover-header">
            <h2 class="title">
              <span class="highlight">DISCOVER</span> OUR PRODUCTS
            </h2>
            <p class="subtitle">
              Lorem ipsum dolor sit amet. Amet est posuere rhoncus scelerisque.
              Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
