function replacer(...match: string[]): string {
	switch(this.token) {
		case 'newline': return '<br />';
		case 'tab': return `<span class="${this.token}"/>`;
		case 'left-arrow': return "&#60;";
		case 'right-arrow': return "&#62;";
		case 'react-component': return `&#60;<span class="${this.token}">${match[2]}</span>`;
		case 'react-component-close': return `&#60;/<span class="${this.token}">${match[2]}</span>`;
		case 'jsdoc-tag': return `<span class="${this.token}">${match[1]}${match[2]}</span> `;
		case 'class-name': return `${match[1]} <span class="${this.token}">${match[3]}</span> `;
		case 'class-name-usage': return `${match[1]} <span class="${this.token}">${match[3]}</span>`;
		case 'function-name': return `<span class="${this.token}">${match[1]}</span>${match[2]}`
		case 'function-param': return `${match[1] + match[2]}<span class="${this.token}">${match[3]}</span>`
		case 'variable-1': return `${match[1]} <span class="${this.token}">${match[3]}</span> `
		case 'variable-2': return `${match[1]} <span class="${this.token}">${match[2]}</span> ${match[3]}`
		case 'variable-3': return `${match[1]}<span class="${this.token}">${match[2]}</span>${match[3]}`
		case 'variable-4': return `${match[1] + match[2]} <span class="${this.token}">${match[3]}</span> `
		case 'variable-5': return `${match[1]}<span class="${this.token}">${match[2]}</span>`
		case 'property': return `${match[1]}<span class="${this.token}">${match[2]}</span>`
		case 'comment-section': return `<span class="${this.token}">${match[1] + match[2] + match[3]}</span>`;
		default: return `<span class="${this.token}">${match[0]}</span>`;
	}
}

export default function syntax(text: string): string {
	let tokenizedText = text;
	const searchTokens = [
		[/(<)/gm, 'left-arrow'],
		[/(>)/gm, 'right-arrow'],
		[/(&#60;)([\w]+){1,}/gm, 'react-component'],
		[/(&#60;\/)([\w]+){1,}/gm, 'react-component-close'],
		[/(type|class|extends)(\s)([\w]+){1,}/gm, 'class-name'],
		[/(\=|await|\&)(\s)(?!await)([A-Z]{1}([\w]+){1,})/gm, 'class-name-usage'],
		[/(const|let|var)(\s)([\w]+){1,}/gm, 'variable-1'],
		[/({)\s([\w]+){1,}\s(})/gm, 'variable-2'],
		[/({)([\w]+){1,}(})/gm, 'variable-3'],
		[/([\w]+){1,}(\:)\s([\w]+){1,}/gm, 'variable-4'],
		[/({)([\w]+){1,}/gm, 'variable-5'],
		[/(const|async|await|type|class|extends|return|function|let)(\s)/gm, 'expression'],
		[/(\n)/gm, 'newline'],
		[/(\t)/gm, 'tab'],
		[/(@)([\w]+)*(\s)/gm, 'jsdoc-tag'],
		[/([\w]+){1,}(\()([\w]+){1,}/gm, 'function-param'],
		[/([\w]+){1,}(\()/gm, 'function-name'],
		[/(\/\*\*)(.+)(\*\/)/gm, 'comment-section'],
		[/(\.)([\w]+){1,}/gm, 'property'],
	]

	for (const searchToken of searchTokens) {
		const [regex, token] = searchToken;
		tokenizedText = tokenizedText.replace(regex, replacer.bind({ token }))
	}

	return tokenizedText;
}