import  React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { ArrowRight } from '@mui/icons-material';



const contents = [
    {
    title: "কেমন সময় দেয়া লাগবে এই প্রোগ্রামে?",
    details: "এটি তো আসলে ব্যক্তিবিশেষে আলাদা – কারও কম সময় লাগবে, কারও বেশি সময় লাগবে! তবে আশা করা যায়ঃ প্রতি সপ্তাহে গড়ে ১৫-২০ ঘণ্টা করে সময় দিলে আপনি তিন মাসের মধ্যে পুরো সিলেবাস শিখে এবং প্রজেক্ট সাবমিট করে শেষ করতে পারবেন।"
    },
    {title: "সবগুলো প্রজেক্ট কি তিন মাসেই শেষ করতে হবে?",
    details: "হ্যাঁ, তিন  মাসেই শেষ করতে হবে। তা না হলে আমাদের পক্ষে প্রজেক্ট রিভিউ ও স্কোর করা সম্ভব হবে না; অর্থাৎ সার্টিফিকেটও দেওয়া হবে না তিন মাসের পর।"},
    {title: "সার্টিফিকেট পাওয়া যাবে?",
    details: "হ্যাঁ, অবশ্যই। কোর্স শেষে সার্টিফিকেট তো থাকছেই। তবে এজন্য তিন মাসের ভিতর কোর্স শেষ করতে হবে।"},
    {title: "ক্লাসগুলো কি লাইভ নাকি প্রি-রেকর্ডেড?",
    details: "প্রোগ্রামের ১০০% কনটেন্টই Live Video Class; এতে করে আপনার সুবিধামত প্রশ্ন করতে পারবেন। এছাড়া ক্লাসশেষে Video record প্রদান করা হবে। "},
    
    {title: "কোডিং কি পারা লাগবে?",
    details: "কোর্সটি বিগিনারদের জন্য। তাই কোডিং না পারলেও সমস্যা নেই। এখানে Automation Testing এর জন্য  প্রয়োজনীয় কোডিং শেখানো হবে। তাই কোডিং  নিয়ে হাল্কা ধারণা থাকলে ভাল, তবে না থাকলেও চলবে।"},
    {
      title:"লাইভ ক্লাসের সময় কখন ?",
      details:"লাইভ ক্লাস প্রতি শুক্রবার ও শনিবার সন্ধ্যা ৭.০০ টা থেকে ৮.৩০ । "
    },
    {
      title:"দুইটি ইন্সটলমেন্টে কত কত দিতে হবে? ",
      details:" আপনি দুটি Installment এ পেমেন্ট করতে পারবেন। প্রথমবার Payment amount: 4000 টাকা। দ্বিতীয়বার Payment Amount: 2000 টাকা(যেটি এক মাসের মধ্যে পরিশোধ করতে হবে)"
    }

]
export default function SimpleAccordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='accodion'>
        {contents.map((c, i) => {
            return <>
            <Accordion 
            style={{border: "none", backgroundColor: "#F2F5F9"}}
            disableGutters={"true"} expanded={expanded === `panel${i}`} onChange={handleChange( `panel${i}`)}>
        <AccordionSummary
          expandIcon={<ArrowRight  style={{fontWeight: "700", fontSize:"2.2rem", color:"#3F3F3F"}} />}
          aria-controls="panel1bh-content"
          id={`panel${i}bh-header`}
          
        >
          
          <Typography sx={{ color: '#3F3F3F', border: "none", fontSize: "16px", fontWeight: "600", lineHeight:"24px" }}>{c.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{lineHeight: "2rem" }}>
           {c.details}
          </Typography>
        </AccordionDetails>
      </Accordion>
            </>
        } )}
      

    </div>
  );
}