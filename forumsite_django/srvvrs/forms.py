from django import forms

from .models import SignUp


class SignUpForm(forms.ModelForm):
    class Meta:
        model = SignUp
        fields = ['email']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        email_base, provider = email.split("@")
        domain, extension = provider.split(".")
        if not domain == 'usc':
            raise forms.ValidationError("please use your USC email.")
        if not extension == "edu":
            raise forms.ValidationError("please enter a valid .edu address")
        return email
