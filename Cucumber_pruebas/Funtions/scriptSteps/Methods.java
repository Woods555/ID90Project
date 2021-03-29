package scriptSteps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import evidences.BaseClass;

public class Methods {
	
	WebDriver driver;
	
	BaseClass bclase = new BaseClass();
	
		
	
	@Given("^Open the browser and the page \"([^\"]*)\"$")
	public void open_the_browser_and_the_page(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.setProperty("webdriver.chrome.driver", "C:\\Librerias\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		
			
		driver.get(url);
		bclase.checkPageIsReady(driver);
		
	    System.out.println("The browser is open and charge the page");
	}


	@Given("^The tool writes the company \"([^\"]*)\"$")
	public void the_tool_writes_the_company(String param_company) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.enviarTexto("airline", "id", driver,param_company);
		//driver.findElement(By.id(("airline"))).sendKeys(param_company);		
		System.out.println("The tool writes the company");
	}

	@Given("^The tool writes the user \"([^\"]*)\"$")
	public void the_tool_writes_the_user(String user) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.enviarTexto("airline-email-3", "id", driver,user);
		//driver.findElement(By.id(("airline-email-3"))).sendKeys(user);
		System.out.println("The tool writes the user");
	}

	@Given("^The tool writes the password \"([^\"]*)\"$")
	public void the_tool_writes_the_password(String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.enviarTexto("airline-password-3", "id", driver,password);
		//driver.findElement(By.id(("airline-password-3"))).sendKeys(password);
		System.out.println("The tool writes the password");
	}

	@When("^The tool clicks Log In button$")
	public void the_tool_clicks_Log_In_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.hacerClick("//button[@type='submit']", "xpath", driver);
	    //driver.findElement(By.xpath("//button[@type='submit']")).click();
	    System.out.println("The tool clicks Log In button");
	}

	@When("^The user Logs In correctly and verify the page is charged$")
	public void the_user_log_in_correctly_and_verify_the_page_is_charged() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='primary-content gtm-footer-link']")));		
	    System.out.println("Go to the page");
	    Thread.sleep(5000);
	    System.out.println("The user Logs In correctly and verify the page is charged");
	}

	@And("^The tool closes the current driver$")
	public void the_tool_closes_the_current_drivers() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.close();
	    System.out.println("The tool closes the current driver");
	}
	
	@When("^The tool clicks Log In button2$")
	public void the_tool_clicks_Log_In_button2() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.hacerClick("//*[@class='btn btn-link text-uppercase mt-3 font-weight-bold text-white d-lg-none']", "xpath", driver);
		System.out.println("The tool clicks Log In button2");
		//Thread.sleep(5000);
	}

	@When("^The tool waits the page is charged$")
	public void the_tool_waits_the_page_is_charged() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.checkPageIsReady(driver);
	    System.out.println("The tool waits the page is charged");
	}

	@Then("^The tool can see the button Get Started$")
	public void The_tool_can_see_the_button_Get_Started() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//WebDriverWait wait = new WebDriverWait(driver, 10);
		//wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='btn btn-primary text-uppercase gtm-get-started-btn']")));
		WebElement element = driver.findElement(By.xpath("//*[@class='btn btn-primary text-uppercase gtm-get-started-btn']"));	
		
		Assert.assertTrue(element.isDisplayed());
		System.out.println("The tool can see the button Get Started");
	}
	
	@Then("^The tool verifies Log In button$")
	public void The_tool_verifies_Log_In_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//WebDriverWait wait = new WebDriverWait(driver, 10);
		//wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='btn btn-primary my-2 w-100']")));
		WebElement element = driver.findElement(By.xpath("//*[@class='btn btn-primary my-2 w-100']"));			
		Assert.assertTrue(element.isDisplayed());
		System.out.println("The tool verifies Log In button");
	}
	
 
}