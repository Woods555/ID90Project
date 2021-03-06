package Evidencias;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {
	
	public boolean isClickable(WebElement element, WebDriverWait wait) {

		try {

		wait.until(ExpectedConditions.elementToBeClickable(element));

		return true;
		} catch (Exception e) {
		return false;
		}
		}
	
	public void checkPageIsReady(WebDriver driver) {

		JavascriptExecutor js = (JavascriptExecutor)driver;
		//Initially bellow given if condition will check ready state of page.
		if (js.executeScript("return document.readyState").toString().equals("complete")){
		return;
		}

		//This loop will rotate for 30 times to check If page Is ready after every 1 second.
		//You can replace your value with 25 If you wants to Increase or decrease wait time.
		for (int i=0; i<30; i++){
		try {
		Thread.sleep(1000);
		}catch (InterruptedException e) {}
		//To check page ready state.
		if (js.executeScript("return document.readyState").toString().equals("complete")){
		break;
		   }
		   }

		}
	
  public void hacerClick(String valorlocator,String locator,WebDriver driver) {
	  
	  WebDriverWait wait = new WebDriverWait(driver, 10);
	  WebElement element;
	  
	  switch(locator){
	  case "id":
		  
		  wait.until(ExpectedConditions.elementToBeClickable(By.id(valorlocator)));
		  element = driver.findElement(By.id(valorlocator));
		  element.click();
		  
		  break;
	  case "xpath":
		  
		  wait.until(ExpectedConditions.elementToBeClickable(By.xpath(valorlocator)));
		  
		  driver.findElement(By.xpath(valorlocator)).click();
		  
		  break;
	  }
	  
	  
  }
  public void enviarTexto(String valorlocator,String locator,WebDriver driver,String texto) {
	  
	  WebDriverWait wait = new WebDriverWait(driver, 10);
	  
	  switch(locator){
	  case "id":
		  
		  wait.until(ExpectedConditions.elementToBeClickable(By.id(valorlocator)));
		  
		  driver.findElement(By.id(valorlocator)).sendKeys(texto);;
		  
		  break;
	  case "xpath":
		  
		  wait.until(ExpectedConditions.elementToBeClickable(By.xpath(valorlocator)));
		  
		  driver.findElement(By.xpath(valorlocator)).sendKeys(texto);
		  
		  break;
	  }
	  
	  
  }
	  
	  
 }


