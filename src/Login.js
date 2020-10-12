import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom'
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.secondary.main,
    }
}));

export const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('');
    const history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("email", email);
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                history.push('/usersite')
            })
            .catch((err) => {
                setErr(err.message);
            });
    }


    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPass(e.target.value)}
                        value={pass}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='secondary'
                        className={classes.submit}
                        onClick={handleFormSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>

                        <Grid item container justify="center">
                            <Link href="#" variant="body2"
                                  onClick={() => {
                                      history.push('/register')
                                  }}
                            >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {err && (
                <p style={{color:'red'}}>{err}</p>
            )}
        </Container>
    );
}