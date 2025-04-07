function sendEmail() {
    const recipient = 'loic.jourdan@tma-consultants.co.uk';
    const subject = 'TMA IMP Query';
    
    const bodyText = `
Hi,

This question is related to the department: Landscape / Arb Risk / Arb Planning / Ecology / Technical / Other (Remove those not relevant)
This question is in relation to the project: XXXXXX (Please add the project number here if relevant)

My Query:


Kind Regards,

(Make sure to add your name in here!)
    `.trim(); // Trim removes any leading/trailing empty lines

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
}
