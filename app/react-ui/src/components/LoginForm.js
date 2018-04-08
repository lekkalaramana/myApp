import React, { Component } from 'react';
import { Form} from 'semantic-ui-react';

class LoginForm extends Component {
	render() {
		return (
				  <div class="ui middle aligned center aligned grid">
				  <div class="column">
				    <h2 class="ui image header">
				      <div class="content">
				        Log-in to your account
				      </div>
				    </h2>
				    <form action="" method="get" class="ui large form">
				      <div class="ui stacked secondary  segment">
				        <div class="field">
				          <div class="ui left icon input">
				            <i class="user icon"></i>
				            <input type="text" name="email" placeholder="E-mail address" />
				          </div>
				        </div>
				        <div class="field">
				          <div class="ui left icon input">
				            <i class="lock icon"></i>
				            <input type="password" name="password" placeholder="Password" />
				          </div>
				        </div>
				        <div class="ui fluid large teal submit button">Login</div>
				      </div>

				      <div class="ui error message"></div>

				    </form>

				    <div class="ui message">
				      New to us? <a href="">Register</a>
				    </div>
				  </div>
				</div>
			);
	}
}

export default LoginForm;