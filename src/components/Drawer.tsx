import React from 'react';
// MUI
import { 
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Box,
    Grid,
    ButtonGroup,
    Button
} from '@mui/material'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { createSvgIcon } from '@mui/material/utils';
// Logo
import Mashreq_logo from './Mashreq_Logo.png'

// creating svg icons
const MoneyIcon = createSvgIcon (
    <>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84716 8.5L7.9662 8.5C8.1942 8.5 8.37903 8.70987 8.37903 8.96875C8.37903 9.22763 8.1942 9.4375 7.9662 9.4375H6.84733C6.69134 9.43768 6.55734 9.56337 6.52774 9.73729C6.49815 9.91113 6.58117 10.0844 6.72575 10.1506V10.1506L7.86214 10.667C8.3737 10.9007 8.66754 11.5134 8.5629 12.1281C8.45827 12.7428 7.98452 13.1871 7.43311 13.1875H6.31489C6.08689 13.1875 5.90206 12.9776 5.90206 12.7188C5.90206 12.4599 6.08689 12.25 6.31489 12.25H7.43254C7.58858 12.2499 7.72264 12.1242 7.75225 11.9502C7.78184 11.7764 7.69883 11.6031 7.55427 11.5369V11.5369L6.41784 11.0205C5.90629 10.7868 5.61244 10.1741 5.71708 9.55939C5.82172 8.94466 6.29575 8.50044 6.84716 8.5Z" fill="#757575"/>
        <path d="M6.72575 10.1506C6.58117 10.0844 6.49815 9.91113 6.52774 9.73729C6.55734 9.56337 6.69134 9.43768 6.84733 9.4375H7.9662C8.1942 9.4375 8.37903 9.22763 8.37903 8.96875C8.37903 8.70987 8.1942 8.5 7.9662 8.5L6.84716 8.5C6.29575 8.50044 5.82172 8.94466 5.71708 9.55939C5.61244 10.1741 5.90629 10.7868 6.41784 11.0205L7.55427 11.5369M6.72575 10.1506V10.1506ZM6.72575 10.1506L7.86214 10.667C8.3737 10.9007 8.66754 11.5134 8.5629 12.1281C8.45827 12.7428 7.98452 13.1871 7.43311 13.1875H6.31489C6.08689 13.1875 5.90206 12.9776 5.90206 12.7188C5.90206 12.4599 6.08689 12.25 6.31489 12.25H7.43254C7.58858 12.2499 7.72264 12.1242 7.75225 11.9502C7.78184 11.7764 7.69883 11.6031 7.55427 11.5369M7.55427 11.5369V11.5369Z" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14061 8.03125C7.36861 8.03125 7.55344 8.24112 7.55344 8.5V8.96875C7.55344 9.22763 7.36861 9.4375 7.14061 9.4375C6.91261 9.4375 6.72778 9.22763 6.72778 8.96875V8.5C6.72778 8.24112 6.91261 8.03125 7.14061 8.03125Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14061 12.25C7.36861 12.25 7.55344 12.4599 7.55344 12.7188V13.1875C7.55344 13.4464 7.36861 13.6562 7.14061 13.6562C6.91261 13.6562 6.72778 13.4464 6.72778 13.1875V12.7188C6.72778 12.4599 6.91261 12.25 7.14061 12.25Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83789 6.15625C3.83789 5.89737 4.02272 5.6875 4.25072 5.6875H10.0303C10.2583 5.6875 10.4432 5.89737 10.4432 6.15625C10.4432 6.41513 10.2583 6.625 10.0303 6.625H4.25072C4.02272 6.625 3.83789 6.41513 3.83789 6.15625Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4547 1.41732C6.60785 1.15659 6.86559 1 7.1416 1C7.41764 1 7.67541 1.15663 7.82855 1.4174L8.10544 1.8943L9.15128 1.30179C9.46907 1.12168 9.8527 1.19252 10.1038 1.47769C10.355 1.76286 10.4174 2.19845 10.2588 2.55929L9.4671 4.35708C9.36514 4.58863 9.11716 4.68249 8.91324 4.56671C8.70931 4.45094 8.62665 4.16937 8.72861 3.93782L9.52002 2.14061L8.4742 2.7331C8.10184 2.9441 7.64931 2.80751 7.41846 2.41435L7.1416 1.93751L6.86171 2.41389C6.63093 2.80754 6.17772 2.94458 5.80527 2.73285C5.16561 2.39236 4.77352 2.12689 4.76411 2.14121L5.53697 3.90282C5.63894 4.13437 5.55628 4.41594 5.35235 4.53171C5.14842 4.64749 4.90045 4.55363 4.79848 4.32208L4.02169 2.55804C3.86424 2.19719 3.92719 1.76251 4.1781 1.4779C4.43057 1.19151 4.8209 1.12337 5.13655 1.30138L6.17447 1.8943L6.4547 1.41732Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60332 7.19442C4.78236 7.35471 4.81307 7.64945 4.67191 7.85274L3.28472 9.85048C2.62349 10.8281 2.50831 12.1473 2.98778 13.2534C3.46869 14.3628 4.42898 15.0619 5.54602 15.0619H8.73306C9.83729 15.0619 10.8108 14.3618 11.2913 13.2534C11.77 12.1491 11.656 10.8325 10.9977 9.85536L9.53498 7.86263C9.38901 7.66376 9.41266 7.36818 9.5878 7.20243C9.76295 7.03669 10.0233 7.06354 10.1692 7.26241L11.6373 9.26241C11.6407 9.2671 11.6441 9.27186 11.6473 9.2767C12.5016 10.5376 12.6508 12.2401 12.0321 13.6674C11.414 15.0932 10.1549 15.9994 8.73306 15.9994H5.54602C4.10937 15.9994 2.86461 15.0922 2.24699 13.6674C1.62828 12.2401 1.77747 10.5376 2.63175 9.2767L2.63475 9.27227L2.63477 9.2723L4.02354 7.2723C4.1647 7.069 4.42428 7.03413 4.60332 7.19442Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
    </>,
    'Money'
);
const EmployIcon = createSvgIcon(
    <>
        <path d="M8.75116 13.5H6.68701V16" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.9715 13.9887C12.522 15.5797 11.2461 16.6066 9.86083 16.4921C8.47561 16.3776 7.32668 15.1503 7.05981 13.5" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.2283 11.5H13.2924V9" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.00806 11.0114C7.45757 9.42031 8.73353 8.39345 10.1187 8.50796C11.504 8.62246 12.6529 9.84976 12.9198 11.5" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.641 6.5V2.5C11.641 1.94772 11.2714 1.5 10.8154 1.5H1.73313C1.27713 1.5 0.907471 1.94772 0.907471 2.5V10.5C0.907471 11.0523 1.27713 11.5 1.73313 11.5H5.03576" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.907471 4.5H11.641" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.55884 7H5.86147" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.55884 9H4.21015" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </>,
    'Employ'
);
const NonLpdIcon = createSvgIcon(
    <>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.38443 0.46875C3.15643 0.46875 2.9716 0.678617 2.9716 0.9375C2.9716 1.19638 3.15643 1.40625 3.38443 1.40625H10.8154C11.0434 1.40625 11.2282 1.19638 11.2282 0.9375C11.2282 0.678617 11.0434 0.46875 10.8154 0.46875H3.38443ZM1.32029 2.8125C1.32029 2.55362 1.50512 2.34375 1.73312 2.34375H12.4667C12.6947 2.34375 12.8795 2.55362 12.8795 2.8125C12.8795 3.07138 12.6947 3.28125 12.4667 3.28125H1.73312C1.50512 3.28125 1.32029 3.07138 1.32029 2.8125ZM0.494629 5.625C0.494629 4.84835 1.04912 4.21875 1.73312 4.21875H12.4667C13.1507 4.21875 13.7052 4.84835 13.7052 5.625V13.125C13.7052 13.9017 13.1507 14.5312 12.4667 14.5312H1.73312C1.04912 14.5312 0.494629 13.9017 0.494629 13.125V5.625ZM1.73312 5.15625C1.50512 5.15625 1.32029 5.36612 1.32029 5.625V13.125C1.32029 13.3839 1.50512 13.5938 1.73312 13.5938H12.4667C12.6947 13.5938 12.8795 13.3839 12.8795 13.125V5.625C12.8795 5.36612 12.6947 5.15625 12.4667 5.15625H1.73312ZM2.35236 7.03125C2.35236 6.64292 2.6296 6.32812 2.9716 6.32812C3.3136 6.32812 3.59085 6.64292 3.59085 7.03125C3.59085 7.41958 3.3136 7.73438 2.9716 7.73438C2.6296 7.73438 2.35236 7.41958 2.35236 7.03125ZM10.6089 11.7188C10.6089 11.3304 10.8862 11.0156 11.2282 11.0156C11.5702 11.0156 11.8474 11.3304 11.8474 11.7188C11.8474 12.1071 11.5702 12.4219 11.2282 12.4219C10.8862 12.4219 10.6089 12.1071 10.6089 11.7188ZM7.09989 7.03125C5.9599 7.03125 5.03575 8.08058 5.03575 9.375C5.03575 10.6694 5.9599 11.7188 7.09989 11.7188C8.23989 11.7188 9.16404 10.6694 9.16404 9.375C9.16404 8.08058 8.23989 7.03125 7.09989 7.03125ZM5.86141 9.375C5.86141 8.59835 6.41589 7.96875 7.09989 7.96875C7.78389 7.96875 8.33838 8.59835 8.33838 9.375C8.33838 10.1517 7.78389 10.7812 7.09989 10.7812C6.41589 10.7812 5.86141 10.1517 5.86141 9.375Z" fill="#808285"/>
        <path d="M3.2216 0.9375C3.2216 0.7859 3.3234 0.71875 3.38443 0.71875V0.21875C2.98946 0.21875 2.7216 0.571333 2.7216 0.9375H3.2216ZM3.38443 1.15625C3.3234 1.15625 3.2216 1.0891 3.2216 0.9375H2.7216C2.7216 1.30367 2.98946 1.65625 3.38443 1.65625V1.15625ZM10.8154 1.15625H3.38443V1.65625H10.8154V1.15625ZM10.9782 0.9375C10.9782 1.0891 10.8764 1.15625 10.8154 1.15625V1.65625C11.2103 1.65625 11.4782 1.30367 11.4782 0.9375H10.9782ZM10.8154 0.71875C10.8764 0.71875 10.9782 0.785899 10.9782 0.9375H11.4782C11.4782 0.571334 11.2103 0.21875 10.8154 0.21875V0.71875ZM3.38443 0.71875H10.8154V0.21875H3.38443V0.71875ZM1.73312 2.09375C1.33815 2.09375 1.07029 2.44633 1.07029 2.8125H1.57029C1.57029 2.6609 1.67208 2.59375 1.73312 2.59375V2.09375ZM12.4667 2.09375H1.73312V2.59375H12.4667V2.09375ZM13.1295 2.8125C13.1295 2.44633 12.8616 2.09375 12.4667 2.09375V2.59375C12.5277 2.59375 12.6295 2.6609 12.6295 2.8125H13.1295ZM12.4667 3.53125C12.8616 3.53125 13.1295 3.17867 13.1295 2.8125H12.6295C12.6295 2.9641 12.5277 3.03125 12.4667 3.03125V3.53125ZM1.73312 3.53125H12.4667V3.03125H1.73312V3.53125ZM1.07029 2.8125C1.07029 3.17867 1.33815 3.53125 1.73312 3.53125V3.03125C1.67208 3.03125 1.57029 2.9641 1.57029 2.8125H1.07029ZM1.73312 3.96875C0.88215 3.96875 0.244629 4.74107 0.244629 5.625H0.744629C0.744629 4.95563 1.21609 4.46875 1.73312 4.46875V3.96875ZM12.4667 3.96875H1.73312V4.46875H12.4667V3.96875ZM13.9552 5.625C13.9552 4.74107 13.3176 3.96875 12.4667 3.96875V4.46875C12.9837 4.46875 13.4552 4.95563 13.4552 5.625H13.9552ZM13.9552 13.125V5.625H13.4552V13.125H13.9552ZM12.4667 14.7812C13.3176 14.7812 13.9552 14.0089 13.9552 13.125H13.4552C13.4552 13.7944 12.9837 14.2812 12.4667 14.2812V14.7812ZM1.73312 14.7812H12.4667V14.2812H1.73312V14.7812ZM0.244629 13.125C0.244629 14.0089 0.88215 14.7812 1.73312 14.7812V14.2812C1.21609 14.2812 0.744629 13.7944 0.744629 13.125H0.244629ZM0.244629 5.625V13.125H0.744629V5.625H0.244629ZM1.57029 5.625C1.57029 5.4734 1.67209 5.40625 1.73312 5.40625V4.90625C1.33815 4.90625 1.07029 5.25883 1.07029 5.625H1.57029ZM1.57029 13.125V5.625H1.07029V13.125H1.57029ZM1.73312 13.3438C1.67208 13.3438 1.57029 13.2766 1.57029 13.125H1.07029C1.07029 13.4912 1.33815 13.8438 1.73312 13.8438V13.3438ZM12.4667 13.3438H1.73312V13.8438H12.4667V13.3438ZM12.6295 13.125C12.6295 13.2766 12.5277 13.3438 12.4667 13.3438V13.8438C12.8616 13.8438 13.1295 13.4912 13.1295 13.125H12.6295ZM12.6295 5.625V13.125H13.1295V5.625H12.6295ZM12.4667 5.40625C12.5277 5.40625 12.6295 5.4734 12.6295 5.625H13.1295C13.1295 5.25883 12.8616 4.90625 12.4667 4.90625V5.40625ZM1.73312 5.40625H12.4667V4.90625H1.73312V5.40625ZM2.9716 6.07812C2.46264 6.07812 2.10236 6.53564 2.10236 7.03125H2.60236C2.60236 6.75021 2.79657 6.57812 2.9716 6.57812V6.07812ZM3.84085 7.03125C3.84085 6.53564 3.48057 6.07812 2.9716 6.07812V6.57812C3.14663 6.57812 3.34085 6.75021 3.34085 7.03125H3.84085ZM2.9716 7.98438C3.48057 7.98438 3.84085 7.52686 3.84085 7.03125H3.34085C3.34085 7.31229 3.14663 7.48438 2.9716 7.48438V7.98438ZM2.10236 7.03125C2.10236 7.52686 2.46264 7.98438 2.9716 7.98438V7.48438C2.79657 7.48438 2.60236 7.31229 2.60236 7.03125H2.10236ZM11.2282 10.7656C10.7192 10.7656 10.3589 11.2231 10.3589 11.7188H10.8589C10.8589 11.4377 11.0532 11.2656 11.2282 11.2656V10.7656ZM12.0974 11.7188C12.0974 11.2231 11.7371 10.7656 11.2282 10.7656V11.2656C11.4032 11.2656 11.5974 11.4377 11.5974 11.7188H12.0974ZM11.2282 12.6719C11.7371 12.6719 12.0974 12.2144 12.0974 11.7188H11.5974C11.5974 11.9998 11.4032 12.1719 11.2282 12.1719V12.6719ZM10.3589 11.7188C10.3589 12.2144 10.7192 12.6719 11.2282 12.6719V12.1719C11.0532 12.1719 10.8589 11.9998 10.8589 11.7188H10.3589ZM5.28575 9.375C5.28575 8.18787 6.12686 7.28125 7.09989 7.28125V6.78125C5.79293 6.78125 4.78575 7.9733 4.78575 9.375H5.28575ZM7.09989 11.4688C6.12686 11.4688 5.28575 10.5621 5.28575 9.375H4.78575C4.78575 10.7767 5.79293 11.9688 7.09989 11.9688V11.4688ZM8.91404 9.375C8.91404 10.5621 8.07292 11.4688 7.09989 11.4688V11.9688C8.40686 11.9688 9.41404 10.7767 9.41404 9.375H8.91404ZM7.09989 7.28125C8.07292 7.28125 8.91404 8.18787 8.91404 9.375H9.41404C9.41404 7.9733 8.40686 6.78125 7.09989 6.78125V7.28125ZM7.09989 7.71875C6.24893 7.71875 5.61141 8.49107 5.61141 9.375H6.11141C6.11141 8.70563 6.58286 8.21875 7.09989 8.21875V7.71875ZM8.58838 9.375C8.58838 8.49107 7.95086 7.71875 7.09989 7.71875V8.21875C7.61692 8.21875 8.08838 8.70563 8.08838 9.375H8.58838ZM7.09989 11.0312C7.95086 11.0312 8.58838 10.2589 8.58838 9.375H8.08838C8.08838 10.0444 7.61692 10.5312 7.09989 10.5312V11.0312ZM5.61141 9.375C5.61141 10.2589 6.24893 11.0312 7.09989 11.0312V10.5312C6.58286 10.5312 6.11141 10.0444 6.11141 9.375H5.61141Z" fill="#808285"/>
    </>,
    'NonLpd'
);
const SelfserviceIcon = createSvgIcon(
    <>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.82469 1.875C5.82469 1.35723 5.45503 0.9375 4.99904 0.9375V0.9375C4.54304 0.9375 4.17338 1.35723 4.17338 1.875V8.90625L2.83086 7.6875C2.64546 7.51907 2.40632 7.44671 2.17169 7.48807C1.93706 7.52942 1.72848 7.68068 1.59678 7.905V7.905C1.40687 8.22794 1.40687 8.64894 1.59678 8.97187L3.60588 12.3937C4.2186 13.4365 5.24967 14.0627 6.35367 14.0625H7.95985C8.70746 14.0627 9.42448 13.7254 9.95298 13.125V13.125C10.4816 12.5248 10.7786 11.7107 10.7786 10.8619V6.5625C10.7786 6.31386 10.6917 6.0754 10.5368 5.89959C10.382 5.72377 10.172 5.625 9.95298 5.625V5.625C9.49699 5.625 9.12733 6.04473 9.12733 6.5625V6.09375C9.12733 5.57598 8.75767 5.15625 8.30167 5.15625V5.15625C7.84567 5.15625 7.47601 5.57598 7.47601 6.09375C7.47601 5.57598 7.10635 5.15625 6.65035 5.15625V5.15625C6.19435 5.15625 5.82469 5.57598 5.82469 6.09375V1.875Z" stroke="#808285" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </>,
    'selfservice'
)

// Customising the Accordion
const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    border: `1px solid #DDE0E9`,
    '&:not(:last-child)': {
      borderTop: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderBot: '1px solid rgba(0, 0, 0, .125)',
}));


const Drawer = () => {
    interface Ihidden {
        0: boolean,
        1: boolean,
        2: boolean,
        3: boolean,
        4: boolean,
        5: boolean
    }
    const [hidden, setHidden] = React.useState<Ihidden>({
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    })
    const itemsList = [
        {
            text: 'Dashboard',
            icon: <HomeOutlinedIcon sx={{fontSize: 20}}/>,
            button1: "Employee",
            button2: "Manager",
            hide: hidden[0]
        },
        {
            text: 'Loans',
            icon: <MoneyIcon sx={{fontSize: 25}}/>,
            hide: hidden[1]
        },
        {
            text: 'Education Allowance',
            icon: <SchoolOutlinedIcon sx={{fontSize: 20}}/>,
            hide: hidden[2]
        },
        {
            text: 'Employee Expenses CLaims',
            icon:<EmployIcon sx={{fontSize: 20}}/>,
            hide: hidden[3]
        },
        {
            text: "Non LPD Claims",
            icon:<NonLpdIcon sx={{fontSize: 20}}/>,
            hide: hidden[4]
        },
        {
            text: "Self Service",
            icon:<SelfserviceIcon sx={{fontSize: 20}}/>,
            hide: hidden[5]
        }
    ];
    const [expanded, setExpanded] = React.useState<string | false>("panel1");
    const handleChange = (panel: string, index: number) => (
        event: React.ChangeEvent<{}>,
        newExpanded: boolean
      ) => {
        setExpanded(newExpanded ? panel : false);
        console.log(index);
        index == 0 && 
        setHidden({
            0: true,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
        })
        index == 1 &&
        setHidden({
            0: false,
            1: true,
            2: false,
            3: false,
            4: false,
            5: false,
        })
        index == 2 &&
        setHidden({
            0: false,
            1: false,
            2: true,
            3: false,
            4: false,
            5: false,
        })
        index == 3 &&
        setHidden({
            0: false,
            1: false,
            2: false,
            3: true,
            4: false,
            5: false,
        })
        index == 4 &&
        setHidden({
            0: false,
            1: false,
            2: false,
            3: false,
            4: true,
            5: false,
        })
        index == 5 &&
        setHidden({
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: true,
        })
    };

  return (
    <MUIDrawer variant="permanent" open >
        <Grid container justifyContent="center">
            <Box component="img" src={Mashreq_logo} alt='Mashreq_logo' sx={{mt:5, width: "200px", justify:"center"}}/>
        </Grid>
        <List sx={{mt:5}}>
        {itemsList.map((item, index) => {
            const { text, icon, button1, button2, hide} = item;
            return (
            <Accordion
                elevation={0}
                expanded={expanded === `panel${index+1}`}
                onChange={handleChange(`panel${index+1}`, index)} 
                >
                <AccordionSummary
                expandIcon={!hide && <AddIcon sx={{ fontSize: 15 }}/>}
                style={{background: hide ? "linear-gradient(90deg, rgba(255, 94, 0, 0) 12.55%, rgba(255, 94, 0, 0.150034) 100%)" : "none"}}>
                    <ListItem button key={text} sx={{p:0}}>
                        {icon && <ListItemIcon sx={{minWidth: "35px", color: hide ? "#FF5E00" : "#6D7278"}}>{icon}</ListItemIcon>}
                        <ListItemText primary={text} sx={{width: "175px", color: hide ? "#FF5E00" : "#6D7278", fontWeight: "700"}}/>
                    </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                    <ButtonGroup disableElevation variant="outlined">
                    {
                        button1 && <Button sx={{color: "#FF5E00", textTransform: "capitalize", borderRadius: "20px", borderColor: "#F8F9FC"}}>{button1}</Button> 
                    }
                    {   
                        button2 && <Button sx={{color: "#BDBDBD",textTransform: "capitalize", borderRadius: "20px", background: "#F8F9FC", border: "none"}}>{button2}</Button>
                    }
                    </ButtonGroup>
                </AccordionDetails>
            </Accordion>
        )})}
        </List>
    </MUIDrawer>
  )
}

export default Drawer