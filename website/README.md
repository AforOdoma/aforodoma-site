# three.js

[![NPM Package][npm]][npm-url]
[![Build Size][build-size]][build-size-url]
[![NPM Downloads][npm-downloads]][npmtrends-url]
[![Discord][discord]][discord-url]
[![DeepWiki][deepwiki]][deepwiki-url]

#### JavaScript 3D library

The aim of the project is to create an easy-to-use, lightweight, cross-browser, general-purpose 3D library. The current builds only include WebGL and WebGPU renderers but SVG and CSS3D renderers are also available as addons.

[Examples](https://threejs.org/examples/) &mdash;
[Docs](https://threejs.org/docs/) &mdash;
[Manual](https://threejs.org/manual/) &mdash;
[Wiki](https://github.com/mrdoob/three.js/wiki) &mdash;
[Migrating](https://github.com/mrdoob/three.js/wiki/Migration-Guide) &mdash;
[Questions](https://stackoverflow.com/questions/tagged/three.js) &mdash;
[Forum](https://discourse.threejs.org/) &mdash;
[Discord](https://discord.gg/56GBJwAnUS)

### Usage

This code creates a scene, a camera, and a geometric cube, and it adds the cube to the scene. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the `document.body` element. Finally, it animates the cube within the scene for the camera.

```javascript
import * as THREE from "three";

const width = window.innerWidth,
  height = window.innerHeight;

// init

const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// animation

function animate(time) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}
```

If everything goes well, you should see [this](https://jsfiddle.net/w43x5Lgh/).

### Cloning this repository

Cloning the repo with all its history results in a ~2 GB download. If you don't need the whole history you can use the `depth` parameter to significantly reduce download size.

```sh
git clone --depth=1 https://github.com/mrdoob/three.js.git
```

### Change log

[Releases](https://github.com/mrdoob/three.js/releases)

[npm]: https://img.shields.io/npm/v/three
[npm-url]: https://www.npmjs.com/package/three
[build-size]: https://badgen.net/bundlephobia/minzip/three
[build-size-url]: https://bundlephobia.com/result?p=three
[npm-downloads]: https://img.shields.io/npm/dw/three
[npmtrends-url]: https://www.npmtrends.com/three
[discord]: https://img.shields.io/discord/685241246557667386
[discord-url]: https://discord.gg/56GBJwAnUS
[deepwiki]: https://deepwiki.com/badge.svg
[deepwiki-url]: https://deepwiki.com/mrdoob/three.js

# My own steps

## Open git bash

clone the repo

```
git clone --depth=1 https://github.com/mrdoob/three.js.git

```

## Navigate to the folder

```
cd three.js
```

## Get it open in VS code

code .

## Click on examples and open any html of your choce

## View using live server

## To open anothe html file, right click on another html file and click open on the side.

## To view it click on

ALT L O

# Terraform

The terraform code is not configured to add so you will get this error

![alt text](image.png)

InvalidViewerCertificate: The specified SSL certificate doesn't exist, isn't in us-east-1 region, isn't valid, or doesn't include a valid certificate chain.
✅ Why This Happens:
You created an ACM certificate but it is not yet validated.

CloudFront only accepts validated ACM certificates in us-east-1 for custom domains.

Since you're using validation_method = "DNS" and you’re on Namecheap (not Route 53), Terraform cannot auto-validate the certificate.

✅ How to Fix:
Check ACM Certificate Status

Go to AWS Console → ACM (us-east-1 region).

You’ll see the new certificate with Pending validation status.

Get the DNS Record for Validation

Click on the certificate.

Copy the CNAME record name and value provided by AWS.

Add the CNAME to Namecheap

Go to Namecheap → Domain → Advanced DNS.

Add the CNAME record exactly as shown in ACM.

Wait for Validation

It can take 5–30 minutes for the certificate to validate.

Re-run terraform apply

Once the certificate status is Issued, rerun:

bash
Copy
Edit
terraform apply
✅ After validation, CloudFront will be able to use the SSL certificate successfully.

For Namecheap DNS:

When AWS gives you:

CNAME Name → e.g. \_a1b2c3d4e5f6.example.com

CNAME Value → e.g. \_123456abcdef.acm-validations.aws

In Namecheap Advanced DNS:

Field Value
Type CNAME
Host Only the part before your domain from the CNAME Name.
Example: \_a1b2c3d4e5f6
Value The full CNAME Value from AWS (e.g. \_123456abcdef.acm-validations.aws)
TTL Leave as Automatic

✅ Example:

AWS gives:

objectivec
Copy
Edit
CNAME Name: \_a1b2c3d4e5f6.aforodoma.com
CNAME Value: \_123456abcdef.acm-validations.aws
In Namecheap:

Host: \_a1b2c3d4e5f6

Value: \_123456abcdef.acm-validations.aws

⚠ Do NOT include .aforodoma.com in the Host field — Namecheap automatically appends your domain.
yes

When you move index.html within the structure, yu need to edit the paths to enable traffic

edit this
FIRST EDIT

````<script type="importmap">
		{
			"imports": {
				"three": "../build/three.module.js",
				"three/addons/": "./jsm/"
			}
		}
	</script>```

to

```<script type="importmap">
		{
			"imports": {
				"three": "./build/three.module.js",
				"three/addons/": "./examples/jsm/"
			}
		}
	</script>
````

SECOND EDIT

change this

````new THREE.BufferGeometryLoader()
				.setPath( 'models/json/' )
				.load( 'suzanne_buffergeometry.json', function ( geometry ) {

					material = new THREE.MeshNormalMaterial();```


          to


```// make instances
			new THREE.BufferGeometryLoader()
				.setPath( 'examples/models/json/' )
				.load( 'suzanne_buffergeometry.json', function ( geometry ) {

					material = new THREE.MeshNormalMaterial();

````

CORRECTION 3

CHANGE THIS

````<script type="importmap">
		{
			"imports": {
				"three": "../build/three.module.js",
				"three/addons/": "./jsm/"
			}
		}
	</script>```


  TO THIS

  <script type="importmap">
		{
			"imports": {
				"three": "./build/three.module.js",
				"three/addons/": "./examples/jsm/"
			}
		}
	</script>
````

# Website Performance Optimization Guide

1. Use Three.js CDN Instead of Local Files
   Replace your local Three.js files with CDN links:
   html<!-- Remove all local three.js imports -->
   <!-- Replace with CDN -->
   <script type="importmap">
   {
     "imports": {
       "three": "https://unpkg.com/three@0.158.0/build/three.module.js",
       "three/addons/": "https://unpkg.com/three@0.158.0/examples/jsm/"
     }
   }
   </script>
2. Optimize Images
   https://tinypng.com/

…or create a new repository on the command line
echo "# aforodoma-site" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AforOdoma/aforodoma-site.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/AforOdoma/aforodoma-site.git
git branch -M main
git push -u origin main

End
End
end
aws s3 cp index.html s3://dev-aforodoma-site-bucket/

aws s3 cp style.css s3://dev-aforodoma-site-bucket/

# Check what got uploaded

aws s3 ls s3://dev-aforodoma-site-bucket --recursive

aws s3 cp ./examples/models/json/suzanne_buffergeometry.json s3://dev-aforodoma-site-bucket/suzanne_buffergeometry.json

aws s3 cp ./examples/afor-luxury-suits_2n150tgz.mp4 s3://dev-aforodoma-site-bucket/afor-luxury-suits_2n150tgz.mp4

# Get your CloudFront distribution ID first

aws cloudfront list-distributions --query 'DistributionList.Items[?Aliases.Items[?contains(@, `aforodoma.com`)]].Id' --output text

# Then invalidate (replace DISTRIBUTION_ID with actual ID)

aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/\*"

aws cloudfront create-invalidation --distribution-id E2EEF8MYXOI1H9 --paths "/\*"

# Go to your website folder (where index.html is)

cd /f/Projects/FullStack/ThreeJs/your-website-folder

# List what files you have locally

ls -la

# Try uploading everything except GitHub files

aws s3 sync . s3://dev-aforodoma-site-bucket \
 --exclude ".github/_" \
 --exclude "_.yml" \
 --exclude "_.yaml" \
 --exclude "_.md" \
 --delete

# Check what got uploaded

aws s3 ls s3://dev-aforodoma-site-bucket --recursive

# invalidate cloudfront

aws cloudfront create-invalidation --distribution-id E2EEF8MYXOI1H9 --paths "/\*"

# developing form section

✅ Updated Code Snippet for the First <section>
Replace your first <section> with this:

html
Copy
Edit

<section style="background: linear-gradient(to right, rgba(0, 0, 255, 0.4), rgba(128, 0, 128, 0.4)); padding: 40px 20px; border-radius: 10px;">
  <div class="hero-text-overlay">
    <h2 class="text-blend">Get in Touch</h2>
    <form action="mailto:aforodoma@gmail.com" method="post" enctype="text/plain" style="max-width: 600px; margin: auto;">
      <label class="text-blend" for="name">Name:</label><br>
      <input type="text" id="name" name="name" required style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 5px;"><br>

      <label class="text-blend" for="email">Email:</label><br>
      <input type="email" id="email" name="email" required style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 5px;"><br>

      <label class="text-blend" for="message">Message:</label><br>
      <textarea id="message" name="message" rows="5" required style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 5px;"></textarea><br>

      <button type="submit" class="cta-button2">Send Message</button>
    </form>

  </div>
</section>
✅ Style Notes
If you'd like, I can also move the inline styles to your style.css file for cleaner HTML.

Would you like me to do that or help you hook it up with Formspree (for better email delivery and confirmation)?

You said:
can you add the logic so that i can get the messages in my email?

ChatGPT said:
To receive form submissions in your email, using mailto: isn't reliable—it depends on the user's email client and often fails silently. A better solution is to use a form backend service like Formspree, Formsubmit, or Basin. These services securely collect the form data and email it to you.

✅ Recommended: Use Formspree
Here’s how to do it in 3 simple steps using Formspree (free for low volume):

✅ Step 1: Update the HTML
Replace the <form> tag and everything inside it with this:

html
Copy
Edit

<form action="https://formspree.io/f/your_form_id" method="POST" style="max-width: 600px; margin: auto;">
  <label class="text-blend" for="name">Name:</label><br>
  <input type="text" id="name" name="name" required style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 5px;"><br>

<label class="text-blend" for="email">Email:</label><br>
<input type="email" id="email" name="email" required style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 5px;"><br>

<label class="text-blend" for="message">Message:</label><br>
<textarea id="message" name="message" rows="5" required style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 5px;"></textarea><br>

<button type="submit" class="cta-button2">Send Message</button>

</form>
🔁 Replace https://formspree.io/f/your_form_id with your actual Formspree URL.

✅ Step 2: Register on Formspree
Go to https://formspree.io.

Click "Get Started" or Sign In.

Create a new form.

Copy the form action URL (e.g. https://formspree.io/f/xayvpgzb) and replace your_form_id in the HTML above.

✅ Step 3: Test the Form
Upload your site to your server or open the .html file in your browser.

Fill the form and submit.

Check your inbox (the one you used to register with Formspree) for the submission.

✅ Optional: Redirect or Success Message
If you want to show a thank you message, add this in your HTML:

html
Copy
Edit
<input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
