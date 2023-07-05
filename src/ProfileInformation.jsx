export const InfoRow = ({ label, value }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};
export const ProfileInformation = ({ userData }) => {
  if (!userData) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }
  // eslint-disable-next-line no-unused-vars
  const { emailInput, firstNameInput, lastNameInput, phone: phoneInput, cityInput } = userData;

  console.log(emailInput);
  const formatPhoneNumber = (phoneNumber) => {

    const firstTwo = phoneNumber.substring(0, 2);
    console.log(firstTwo)
    const middleTwo = phoneNumber.substring(2, 4);
    const middleMiddleTwo = phoneNumber.substring(4, 6);
    const lastNumber = phoneNumber.substring(6, 7);
    return `${firstTwo}-${middleTwo}-${middleMiddleTwo}-${lastNumber}` 
  }

  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="Email" value={emailInput} />
        <InfoRow label="First Name" value={firstNameInput} />
        <InfoRow label="Last Name" value={lastNameInput} />
        <InfoRow label="City" value={cityInput} />
        {/* You will need to format the string "nnnnnnn" as "nn-nn-nn-n" */}
        {/* <InfoRow label="Phone" value={formatPhoneNumber(phoneInput)} /> */}
        <InfoRow label="Phone" value={phoneInput} />
      </div>
    </>
  );
};
