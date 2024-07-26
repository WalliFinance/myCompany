import { test, expect } from '@playwright/test';

test('has title simulation page', async ({ page }) => {
  await page.goto('http://localhost:3000/simular');

  await expect(page).toHaveTitle(/Simulação/);
});

test('has title home page',async({page})=>{
  await page.goto('http://localhost:3000/')

  await expect(page).toHaveTitle(/Home/)
})


test('validate email format', async({page})=>{
  await page.goto('http://localhost:3000/simular');

  await page.getByText('Tipo de financiamento desejado').selectOption('Financiamento imobiliario')

  await page.getByText('Valor do imovel desejado').fill('1000000000')
  await page.getByText('Valor a ser financiado').fill('200000000')

  await page.getByText('AVANÇAR').click()


  await page.getByLabel('Nome').fill('Luan Lopes')

  await page.getByLabel('Email').fill('sdasdasdasdas')
  
  await page.getByLabel('Telefone').fill('11959113040')
  
  await page.getByLabel('Data de nascimento').fill('2000-02-03')

  await page.getByText('FINALIZAR').click()

  await expect(page.getByText('Formato de email invalido')).toBeVisible()
})



