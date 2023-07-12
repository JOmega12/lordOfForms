// import { capitalize } from "./utils/transformations";

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
export const ProfileInformation = ({ userData, isSubmit }) => {
  if (!userData || !isSubmit) {
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
  const { email, firstName, lastName, phoneNumber , city } = userData;

  // const formattedFirstName = capitalize(firstName);
  // const formattedLastName = capitalize(lastName);
  // console.log(formattedFirstName, 'firstname format')
  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="Email" value={isSubmit? email : 'default'} />
        <InfoRow label="First Name" value={isSubmit? firstName : 'default'} />
        <InfoRow label="Last Name" value={isSubmit? lastName : 'default'} />
        <InfoRow label="City" value={isSubmit? city : 'default'} />
        <InfoRow label="Phone" value={isSubmit? `${phoneNumber[0]}-${phoneNumber[1]}-${phoneNumber[2]}-${phoneNumber[3]}` : 'default'} />
      </div>
    </>
  );
};
