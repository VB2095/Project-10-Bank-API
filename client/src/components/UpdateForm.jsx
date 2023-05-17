import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../features/update/updateActions';

const UpdateForm = ({ setFormVisible }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(userInfo.body.firstName);
  const [lastName, setLastName] = useState(userInfo.body.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ firstName, lastName }))
      .then(() => {
        // Succès de la mise à jour du profil
        // Vous pouvez effectuer des actions supplémentaires ici
        setFormVisible(false); // Masquer le formulaire après la mise à jour
      })
      .catch((error) => {
        // Gérer les erreurs de mise à jour du profil
        console.log('Erreur lors de la mise à jour du profil :', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="sign-in-button">
        Update
      </button>
      <button className="sign-in-button" onClick={() => setFormVisible(false)}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateForm;
