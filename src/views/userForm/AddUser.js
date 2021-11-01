import React, { useEffect} from 'react';
import { 
    TextField,
    Button,
    Container,
    Box,
    Paper,
    Typography,
    InputAdornment
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
// import {v4 as uuid} from 'uuid';
import { useFormik } from "formik";
import * as yup from "yup";


import { userFormStyles } from './style';
import { addUser, editUser, getOneUser } from '../../redux/users/userAction';
import Loader from '../../components/Loader';

const UserForm = () => {
    const classes = userFormStyles();
    const dispatch = useDispatch();
    const {oneUser,
        loadingAddUser,
        loadingFetchOneUsers,
        loadingEditUsers
    } = useSelector(state => state.users);
    const history = useHistory();
    const {id} = useParams();


    const fetchOneUser = (id) => {
        if(id) {
           dispatch(getOneUser(id));
        }
    }
    useEffect(() => {
        fetchOneUser(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const userValidationSchema = yup.object({
        name : yup
            .string()
            .required("Username is required")
            .max(100, "maximum 100 character is required"),
        contact : yup
            .string()
            .matches(
                /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
                "Enter a valid phone number"
            )
            .required("Contact number is required"),
        email: yup
            .string()
            .email("Enter a valid email")
            .max(60, "Email address must not be more than 100 characters")
            .matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$/, "Enter a valid email")
            .required("Email is required"),
        password: yup
            .string()
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: oneUser?.name || '', 
            email: oneUser?.email || '', 
            contact: oneUser?.contact || "", 
            password: oneUser?.password || "",
        },
        validationSchema: userValidationSchema,
        onSubmit: (values) => {
            
            id ? dispatch(editUser(id, values)) : dispatch(addUser(values));
            history.push("/");
        },
      });

    return (
        <Container className={classes.root} disableGutters>
            <Loader 
                loading={ loadingAddUser
                    || loadingFetchOneUsers
                    || loadingEditUsers
                } 
            />
            <Paper component={Box} className="main-container">
                <Typography variant="h3" align="center" color="primary"> User's List </Typography>
                
                <div className="form-wrapper">
                <form 
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}
                >
                <TextField
                    type="text" 
                    id="name"
                    name="name" 
                    label="UserName" 
                    placeholder="Enter your userName"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps = {{
                        startAdornment : (
                            <InputAdornment position="start">
                                <AccountCircleIcon color="secondary" />
                            </InputAdornment>
                        )
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    type="number" 
                    id="contact"
                    name="contact" 
                    label="Contact Number" 
                    placeholder="Enter Contact Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps = {{
                        startAdornment : (
                            <InputAdornment position="start">
                                <PhoneIcon color="secondary" />
                            </InputAdornment>
                        )
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                    error={formik.touched.contact && Boolean(formik.errors.contact)}
                    helperText={formik.touched.contact && formik.errors.contact}
                />     
                <TextField
                    type="email" 
                    id="email"
                    name="email" 
                    label="Email" 
                    placeholder="Enter your emailId"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps = {{
                        startAdornment : (
                            <InputAdornment position="start">
                                <EmailIcon color="secondary" />
                            </InputAdornment>
                        )
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                    type="password" 
                    id="password"
                    name="password" 
                    label="Password" 
                    placeholder="Enter your password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps = {{
                        startAdornment : (
                            <InputAdornment position="start">
                                <VisibilityIcon color="secondary" />
                            </InputAdornment>
                        )
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Box align="end">
                <Button 
                    color="primary"
                    variant="contained"
                    // fullWidth
                    className="custom-btn"
                    type="submit"
                    startIcon={<AddIcon fontSize='large'/>}
                    align="end"
                > {id ? "Edit User" : "Add User"}
                </Button>
                </Box>
            </form>
            </div>
            </Paper>
        </Container>
    )
}

export default UserForm

