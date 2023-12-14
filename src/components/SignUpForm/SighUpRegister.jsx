


const SignUpRegister = () => {
    return (
        <SignUpRegisterContainer>
      <Image src="" alt="image" />
      <RegisterTitle>Sign up</RegisterTitle>
      <RegisterText>You need to register to use the service</RegisterText>
      <RegisterForm autoComplete="off">
        <label htmlFor="name">
          <InputContainer>
            <InputText type="text" id="name" name="name" placeholder="Name" />
          </InputContainer>
        </label>
        <label htmlFor="email">
          <InputContainer>
            <InputText
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
          </InputContainer>
        </label>
        <label htmlFor="password">
          <InputContainer>
            <InputText
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </InputContainer>
        </label>
        <InputButton type="submit">Sign Up</InputButton>
      </RegisterForm>
      <QuestionBlock>
        <Question>Do you already have an account?</Question>
        <Link to="/signin">Sign in</Link>
      </QuestionBlock>
    </SignUpRegisterContainer>
  );
}; 
    
export default SignUpRegister