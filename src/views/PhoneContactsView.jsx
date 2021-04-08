import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactsList';
import ContactsFilter from '../components/ContactsFilter';
import Modal from '../components/Modal';
import Button from '../components/Button';
import contactOperations from '../redux/contacts/contacts-operations';
import ContactsSelectors from '../redux/contacts/contacts-selectors';
import Container from '../components/Container';
import contactsImg from './img-view-bg/contacts-bg.jpg';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    paddingTop: 60,
    height: 700,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'black',
    justifyContent: 'center',
  },
  wrapper: {
    textAlign: 'center',
    padding: 10,
    width: 500,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 7,
    opacity: 0.8,
    overflow: 'auto',
    backdropFilter: 'blur(100px)',
    border: '1px solid #A52A2A',
  },
  btn: {
    margin: 20,
    backgroundColor: '#A52A2A',
    color: '#fff',
    padding: 7,
    borderRadius: 7,
    fontWeight: 700,
    border: '1px solid #A52A2A',
    '&:hover': {
      color: '#A52A2A',
      backgroundColor: '#fff',
      border: '1px solid #A52A2A',
      fontWeight: 700,
    },
  },
  filter: {
    margin: 15,
    borderRadius: 7,
  },
});

const PhoneContactsView = () => {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(ContactsSelectors.getContacts);
  const togleModal = () => setShowModal(!showModal);
  const visibleContacts = useSelector(ContactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const st = useStyles();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);
  return (
    <Container
      className={st.container}
      style={{
        backgroundImage: `url(${contactsImg})`,
      }}
    >
      <div className={st.wrapper}>
        <h1>Phonebook</h1>
        <Button onClick={togleModal} value="Add  contact" className={st.btn} />
        {showModal && (
          <Modal onClose={togleModal}>
            <ContactForm onClose={togleModal} />
          </Modal>
        )}
        <h2>Contacts</h2>
        {contacts.length > 1 && <ContactsFilter className={st.filter} />}
        {visibleContacts.length > 0 && <ContactList />}
      </div>
    </Container>
  );
};

export default PhoneContactsView;
