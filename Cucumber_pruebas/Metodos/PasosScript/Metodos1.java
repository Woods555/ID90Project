package PasosScript;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Evidencias.BaseClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Metodos1 {
	
	WebDriver driver;
	
	BaseClass bclase = new BaseClass();
	
		
	
	@Given("^Abrir el navegador y la pagina \"([^\"]*)\"$")
	public void abrir_el_navegador_y_la_pagina(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.setProperty("webdriver.chrome.driver", "C:\\Librerias\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		
			
		driver.get(url);
		bclase.checkPageIsReady(driver);
		
	    System.out.println("Se abre la pagina y el navegador");
	}


	@Given("^Una vez que se abra escribir el company \"([^\"]*)\"$")
	public void una_vez_que_se_abra_escribir_el_company(String param_company) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.enviarTexto("airline", "id", driver,param_company);
		//driver.findElement(By.id(("airline"))).sendKeys(param_company);		
		System.out.println("Se escribe el Company");
	}

	@Given("^Escrbir usuario \"([^\"]*)\"$")
	public void escrbir_usuario(String user) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.enviarTexto("airline-email-3", "id", driver,user);
		//driver.findElement(By.id(("airline-email-3"))).sendKeys(user);
		System.out.println("Se escribe el User");
	}

	@Given("^Escrbir password \"([^\"]*)\"$")
	public void escrbir_password(String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.enviarTexto("airline-password-3", "id", driver,password);
		//driver.findElement(By.id(("airline-password-3"))).sendKeys(password);
		System.out.println("Se escribe el password");
	}

	@When("^Dar en click en Log In$")
	public void dar_en_click_en_Log_In() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.hacerClick("//button[@type='submit']", "xpath", driver);
	    //driver.findElement(By.xpath("//button[@type='submit']")).click();
	    System.out.println("Se clickea preto");
	}

	@When("^Entra a la pagina logueandose correctamente y verifica$")
	public void entra_a_la_pagina_logueandose_correctamente() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='primary-content gtm-footer-link']")));		
	    System.out.println("Entra a la pagina");
	    Thread.sleep(5000);
	    System.out.println("Entra a la pagina logueandose correctamente y verifica");
	}

	@And("^Cierra el navegador$")
	public void cierra_el_navegador() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.close();
	    System.out.println("Se cierra el navegador");
	}
	
	@When("^Clickea el boton Log In$")
	public void Clickea_el_boton_Log_In() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.hacerClick("//*[@class='btn btn-link text-uppercase mt-3 font-weight-bold text-white d-lg-none']", "xpath", driver);
		System.out.println("Toca el boton Log In");
		//Thread.sleep(5000);
	}

	@When("^el usuario espera pagina$")
	public void el_usuario_espera_pagina() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		bclase.checkPageIsReady(driver);
	    System.out.println("Se espera que se cargue la pagina");
	}

	@Then("^El Cliente puede ver el boton Get Started$")
	public void el_cliente_encuentra_el_boton() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//WebDriverWait wait = new WebDriverWait(driver, 10);
		//wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='btn btn-primary text-uppercase gtm-get-started-btn']")));
		WebElement element = driver.findElement(By.xpath("//*[@class='btn btn-primary text-uppercase gtm-get-started-btn']"));	
		
		Assert.assertTrue(element.isDisplayed());
		System.out.println("El Cliente puede ver el boton Get Started");
	}
	
	@Then("^Verifica elemento en Log In$")
	public void Verifica_elemento_en_Log_In() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//WebDriverWait wait = new WebDriverWait(driver, 10);
		//wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='btn btn-primary my-2 w-100']")));
		WebElement element = driver.findElement(By.xpath("//*[@class='btn btn-primary my-2 w-100']"));			
		Assert.assertTrue(element.isDisplayed());
		System.out.println("El Cliente puede ver el boton Log In");
	}
	
 
}
